import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRole } from 'generated/prisma';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';
import { UpdateAuthDto } from 'src/auth/dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    try {
      const Users = await this.prisma.users.findMany();
      if (!Users.length) return { message: 'No Users found' };

      const data = {
        Users,
        Length: Users.length,
      };

      return { data };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const User = await this.prisma.users.findFirst({ where: { id } });
      if (!User) throw new NotFoundException('User not found ❗');

      return { User };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateAuthDto) {
    try {
      const user = await this.findOne(id);
      if (!user) throw new NotFoundException('User not found ❗');

      const checkRegion = await this.prisma.regions.findFirst({
        where: { id: updateUserDto.regionId },
      });

      if (!checkRegion) throw new NotFoundException('Region not found ❗');

      const newUser = await this.prisma.users.update({
        where: { id },
        data: updateUserDto,
      });

      return { newUser };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const user = await this.findOne(id);
      if (!user) throw new NotFoundException('User not found ❗');


      await this.prisma.users.delete({ where: { id } });
      return { message: 'User is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
