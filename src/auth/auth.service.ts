import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async findUser(phone: string) {
    try {
      return await this.prisma.users.findUnique({ where: { phone } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createSuperAdmin(createAuthDto: CreateAuthDto) {
    try {
      const user = await this.findUser(createAuthDto.phone);
      if (user) throw new ForbiddenException('This account already exits❗');
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
