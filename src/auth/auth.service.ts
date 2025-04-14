import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { totp } from 'otplib';
import { EskizService } from '../eskiz/eskiz.service';
import { RegisterDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login-user.dto';

totp.options = { digits: 6, step: 1800 };

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private eskizService: EskizService,
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
        throw new BadRequestException('This account already exists ❗');

      const checkRegion = await this.prisma.regions.findFirst({
        where: { id: registerDto.regionId },
      });

      if (!checkRegion) throw new NotFoundException('Region not found ❗');

      const hashPass = bcrypt.hashSync(registerDto.password, 10);

      const NewUser = {
        ...registerDto,
        password: hashPass,
      };

      const otp = totp.generate(
        `${process.env.REGISTER_SECRET_KEY}_${registerDto.phone}`,
      );

      await this.eskizService.sendSMS(`Your OTP code: ${otp}`, registerDto.phone);

      await this.prisma.users.create({ data: NewUser });

      return {
        message:
          'Registered successfully ✅. We sent an OTP to your phoneNumber. Please activate your account',
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async login(loginDto: LoginDto) {
    try {
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
