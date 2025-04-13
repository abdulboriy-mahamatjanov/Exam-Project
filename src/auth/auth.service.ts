import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';
import totp from 'otplib';
import { EskizService } from 'src/eskiz/eskiz.service';
import { UserRole } from 'generated/prisma';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eskizService: EskizService,
  ) {}

  async findUser(phone: string) {
    try {
      return await this.prisma.users.findUnique({ where: { phone } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  //   async createSuperAdmin(createAuthDto: CreateAuthDto) {
  //     try {
  //       const checkAdmin = await this.prisma.users.findFirst({
  //         where: { role: UserRole.ADMIN },
  //       });

  //       if (checkAdmin) throw new ForbiddenException(`This ${checkAdmin.role} role already exists ❗`);

  //       const user = await this.findUser(createAuthDto.phone);
  //       if (user) throw new ForbiddenException('This account already exits❗');

  //       const hashPass = bcrypt.hashSync(createAuthDto.password, 10);

  //       const newUser = await this.prisma.users.create({
  //         data: {
  //           ...createAuthDto,
  //           password: hashPass,
  //           status: 'ACTIVE',
  //         },
  //       });

  //       return { newUser };
  //     } catch (error) {
  //       throw new BadRequestException(error.message);
  //     }
  //   }
}
