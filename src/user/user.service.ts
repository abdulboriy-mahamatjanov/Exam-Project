import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateAuthDto } from 'src/auth/dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/uploads/uploads.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async findAll(query: any) {
    try {
      const { page = 1, limit = 10, order = 'desc', search = '' } = query;

      const Users = await this.prisma.users.findMany({
        where: {
          OR: [
            {
              fullName: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              phone: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        },

        include: {
          region: {
            select: {
              id: true,
              nameUz: true,
              nameRu: true,
              nameEn: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          DataAboutCompany: true,
        },

        skip: (page - 1) * limit,
        take: Number(limit),

        orderBy: {
          fullName: order,
        },
      });

      return Users;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const findUser = await this.prisma.users.findFirst({
        where: { id },
        include: { region: true },
      });

      if (findUser) throw new NotFoundException('User not found ❗');

      return { findUser };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateAuthDto) {
    try {
      const user = await this.prisma.users.findFirst({ where: { id } });
      if (!user) throw new NotFoundException('User not found ❗');

      const checkRegion = await this.prisma.regions.findFirst({
        where: { id: updateUserDto.regionId },
      });
      if (!checkRegion) throw new NotFoundException('Region not found ❗');

      let oldPublicId = this.cloudinaryService.getPublicId(user.avatar);
      let newPublicId: string | null = null;

      if (updateUserDto.avatar) {
        newPublicId = this.cloudinaryService.getPublicId(updateUserDto.avatar);

        const checkImage = await this.cloudinaryService.checkImage(newPublicId);
        if (!checkImage)
          throw new BadRequestException('Image is not available yet ❗');

        if (oldPublicId !== newPublicId) {
          await this.cloudinaryService.deleteImage(oldPublicId);
        }
      }

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
      const user = await this.prisma.users.findFirst({ where: { id } });
      if (!user) throw new NotFoundException('User not found ❗');

      let publicId = this.cloudinaryService.getPublicId(user.avatar);
      let checkImage = await this.cloudinaryService.checkImage(publicId);

      if (checkImage) {
        await this.cloudinaryService.deleteImage(publicId);
      }

      const deletedUser = await this.prisma.users.delete({ where: { id } });
      return deletedUser;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
