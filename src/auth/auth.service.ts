import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { totp } from 'otplib';
import { EskizService } from '../eskiz/eskiz.service';
import { RegisterDto, UserRoles } from './dto/register-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import * as DeviceDetector from 'device-detector-js';
import { CloudinaryService } from 'src/uploads/uploads.service';

totp.options = { digits: 6, step: 1800 };

@Injectable()
export class AuthService {
  private DeviceDetector = new DeviceDetector();

  constructor(
    private readonly prisma: PrismaService,
    private readonly eskizService: EskizService,
    private readonly jwtService: JwtService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async findUser(phone: string) {
    try {
      return await this.prisma.users.findUnique({ where: { phone } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createSuperAdmin(createAuthDto: CreateAuthDto) {
    try {
      const checkPhoneNumber = await this.findUser(createAuthDto.phone);
      if (checkPhoneNumber)
        throw new ForbiddenException('This account already exits❗');

      const checkRegion = await this.prisma.regions.findFirst({
        where: { id: createAuthDto.regionId },
      });

      if (!checkRegion) throw new NotFoundException('Region not found ❗');

      const publicId = this.cloudinaryService.getPublicId(createAuthDto.avatar);

      const checkImage = await this.cloudinaryService.checkImage(publicId);
      if (!checkImage)
        throw new BadRequestException('Image is not available yet ❗');

      const hashPass = bcrypt.hashSync(createAuthDto.password, 10);

      const newUser = await this.prisma.users.create({
        data: {
          ...createAuthDto,
          password: hashPass,
          status: 'ACTIVE',
        },
      });

      return { newUser };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async register(registerDto: RegisterDto) {
    try {
      const checkUser = await this.findUser(registerDto.phone);
      if (checkUser)
        throw new BadRequestException(
          `This ${checkUser.phone} PhoneNumber already in use❗`,
        );

      const checkRegion = await this.prisma.regions.findFirst({
        where: { id: registerDto.regionId },
      });
      if (!checkRegion) throw new NotFoundException('Region not found ❗');

      const publicId = this.cloudinaryService.getPublicId(registerDto.avatar);
      const checkAvatar = await this.cloudinaryService.checkImage(publicId);

      if (!checkAvatar)
        throw new BadRequestException('Avatar is not available yet ❗');

      const hashPass = bcrypt.hashSync(registerDto.password, 10);

      const createdUser = await this.prisma.users.create({
        data: {
          fullName: registerDto.fullName,
          phone: registerDto.phone,
          password: hashPass,
          regionId: registerDto.regionId,
          avatar: registerDto.avatar,
          role: registerDto.role,
          DataAboutCompany:
            registerDto.role === 'USER_YUR' && registerDto.dataCompany
              ? {
                  create: registerDto.dataCompany.map((val) => ({
                    INN: val.INN,
                    MFO: val.MFO,
                    R_or_C: val.R_or_C,
                    address: val.address,
                    bankCode: val.bankCode,
                    Oked: val.Oked,
                  })),
                }
              : undefined,
        },
        include: {
          DataAboutCompany: true,
        },
      });

      const otp = totp.generate(
        `${process.env.REGISTER_SECRET_KEY}_${registerDto.phone}`,
      );

      // await this.eskizService.sendSMS(
      //   `Your OTP code: ${otp}`,
      //   `${registerDto.phone}`,
      // );

      return {
        createdUser,
        otp,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async verifyOTP(phone: string, otp: string) {
    try {
      const checkUserWithPhone = await this.prisma.users.findUnique({
        where: { phone: phone },
      });

      if (!checkUserWithPhone)
        throw new BadRequestException('Wrong PhoneNumber ❗');

      const checkOtp = totp.verify({
        token: otp,
        secret: `${process.env.REGISTER_SECRET_KEY}_${phone}`,
      });

      if (!checkOtp) throw new BadRequestException('Wrong OTP ❗');

      if (checkUserWithPhone.status == 'INACTIVE') {
        await this.prisma.users.update({
          data: { status: 'ACTIVE' },
          where: { phone },
        });
      }

      return { message: 'Your account verified successfully ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async resendOTP(phone: string) {
    try {
      const chechkPhoneNumber = await this.prisma.users.findUnique({
        where: { phone: phone },
      });

      if (!chechkPhoneNumber)
        throw new BadRequestException('Wrong PhoneNumber ❗');

      const NewOTP = totp.generate(
        `${process.env.REGISTER_SECRET_KEY}_${phone}`,
      );

      return { NewOTP };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async login(loginDto: LoginDto, req: Request) {
    try {
      const checkUser = await this.findUser(loginDto.phone);
      if (!checkUser) throw new BadRequestException('User not found ❗');

      if (checkUser.status == 'INACTIVE')
        throw new ForbiddenException('You should activate your account ❗');

      const checkPassword = bcrypt.compareSync(
        loginDto.password,
        checkUser.password,
      );
      if (!checkPassword) throw new BadRequestException('Wrong Password ❗');

      const sessions = await this.prisma.sessions.findFirst({
        where: { ipAddress: req.ip, userId: checkUser.id },
      });

      if (!sessions) {
        const userAgent: any = req.headers['user-agent'];
        const device: any = this.DeviceDetector.parse(userAgent);

        const NewSessions = {
          ipAddress: req.ip!,
          userId: checkUser.id,
          deviceInfo: device,
        };

        await this.prisma.sessions.create({ data: NewSessions });
      }

      const access_token = await this.generateAccessToken({
        id: checkUser.id,
        role: checkUser.role,
      });

      const refresh_token = await this.generateRefreshToken({
        id: checkUser.id,
        role: checkUser.role,
      });

      return { access_token, refresh_token };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async sessions(req: Request) {
    try {
      const id = req['user'].id;

      const user = await this.prisma.users.findFirst({ where: { id } });
      if (!user) throw new NotFoundException('User not found ❗');

      const Sessions = await this.prisma.sessions.findMany({
        where: { userId: id },
      });

      if (!Sessions.length) return { message: 'No Sessios found' };

      return { Sessions };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteSessions(req: Request, id: string) {
    try {
      const findSession = await this.prisma.sessions.findFirst({
        where: { id },
      });
      if (!findSession) throw new NotFoundException('Session not found ❗');

      await this.prisma.sessions.delete({ where: { id } });
      return { message: 'Session is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async myPage(req: Request) {
    try {
      const id = req['user'].id;

      const checkSessions = await this.prisma.sessions.findFirst({
        where: { ipAddress: req.ip, userId: id },
      });
      if (!checkSessions) throw new UnauthorizedException();

      const myData = await this.prisma.users.findFirst({
        where: { id },
        include: { region: true },
      });
      if (!myData) throw new NotFoundException('Data not found ❗');

      return { myData };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async refreshToken(request: Request) {
    const user = request['user'];
    try {
      const access_token = await this.generateRefreshToken({
        id: user.id,
        role: user.role,
      });

      return { access_token };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async resetPassword() {
    try {
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async generateAccessToken(payload: object) {
    try {
      return this.jwtService.sign(payload, {
        secret: process.env.JWT_ACCESS_KEY,
        expiresIn: '12h',
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async generateRefreshToken(payload: object) {
    try {
      return this.jwtService.sign(payload, {
        secret: process.env.JWT_REFRESH_KEY,
        expiresIn: '7d',
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
