import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/uploads/uploads.service';

@Injectable()
export class MasterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  async create(createMasterDto: CreateMasterDto) {
    try {
      const checkMaster = await this.prisma.masters.findUnique({
        where: { phone: createMasterDto.phone },
      });

      if (checkMaster)
        throw new BadRequestException(
          `This ${checkMaster.phone} PhoneNumber already in use ❗`,
        );

      const masterAvatar = this.cloudinary.getPublicId(createMasterDto.avatar);
      const checkMasterAvatar = await this.cloudinary.checkImage(masterAvatar);
      if (!checkMasterAvatar)
        throw new BadRequestException(
          "Master's avatar is not available yet ❗",
        );

      const masterPassportImage = this.cloudinary.getPublicId(
        createMasterDto.passportImage,
      );
      const checkPassportImage =
        await this.cloudinary.checkImage(masterPassportImage);
      if (!checkPassportImage)
        throw new BadRequestException(
          "Master's passportImage is not available yet ❗",
        );

      const NewMaster = await this.prisma.masters.create({
        data: createMasterDto,
      });

      return { NewMaster };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const { page = 1, limit = 10, order = 'desc', search = '' } = query;

      const Masters = await this.prisma.masters.findMany({
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

        skip: (page - 1) * limit,
        take: Number(limit),

        orderBy: {
          fullName: order,
        },
      });

      if (!Masters.length)
        return { message: 'Masters are not available yet ❗' };

      return { Masters };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Master = await this.prisma.masters.findFirst({ where: { id } });
      if (!Master) throw new NotFoundException('Master not found ❗');

      return { Master };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateMasterDto: UpdateMasterDto) {
    try {
      const findMaster = await this.findOne(id);
      if (!findMaster) throw new NotFoundException('Master not found ❗');

      if (updateMasterDto.phone) {
        const checkPhoneNumber = await this.prisma.masters.findFirst({
          where: {
            phone: updateMasterDto.phone,
            NOT: { id },
          },
        });

        if (checkPhoneNumber)
          throw new BadRequestException(
            `This ${updateMasterDto.phone} PhoneNumber alredy in use ❗`,
          );
      }

      const NewMaster = await this.prisma.masters.update({
        data: updateMasterDto,
        where: { id },
      });

      return { NewMaster };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const findMaster = await this.findOne(id);
      if (!findMaster) throw new NotFoundException('Master not found ❗');

      let masterAvatar = this.cloudinary.getPublicId(findMaster.Master.avatar);
      let masterPassportImage = this.cloudinary.getPublicId(
        findMaster.Master.passportImage,
      );

      await Promise.allSettled([
        this.cloudinary.deleteImage(masterAvatar),
        this.cloudinary.deleteImage(masterPassportImage),
      ]);

      await this.prisma.masters.delete({ where: { id } });
      return { message: 'Master is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
