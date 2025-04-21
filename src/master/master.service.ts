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
      const { masterProfessions, ...masterData } = createMasterDto;

      const checkMaster = await this.prisma.masters.findUnique({
        where: { phone: masterData.phone },
      });

      if (checkMaster)
        throw new BadRequestException(
          `This ${checkMaster.phone} PhoneNumber already in use ❗`,
        );

      const masterAvatar = this.cloudinary.getPublicId(masterData.avatar);
      const masterPassportImage = this.cloudinary.getPublicId(
        createMasterDto.passportImage,
      );

      const [checkAvatar, checkPassportImage] = await Promise.all([
        this.cloudinary.checkImage(masterAvatar),
        this.cloudinary.checkImage(masterPassportImage),
      ]);

      if (!checkAvatar) {
        throw new BadRequestException(
          "Master's avatar is not available yet ❗",
        );
      }

      if (!checkPassportImage) {
        throw new BadRequestException(
          "Master's passportImage is not available yet ❗",
        );
      }

      const NewMaster = await this.prisma.masters.create({ data: masterData });

      if (masterProfessions?.length) {
        for (const item of masterProfessions) {
          const [checkProfession, checkLevel] = await Promise.all([
            await this.prisma.professions.findUnique({
              where: { id: item.professionId },
            }),

            await this.prisma.levels.findUnique({
              where: { id: item.levelId },
            }),
          ]);

          if (!checkProfession) {
            throw new BadRequestException('Profession is not available yet ❗');
          }

          if (!checkLevel) {
            throw new BadRequestException('Level is not available yet ❗');
          }
        }

        await this.prisma.masterProfessions.createMany({
          data: masterProfessions.map((val) => ({
            masterId: NewMaster.id,
            professionId: val.professionId,
            minWorkingHours: val.minWorkingHours,
            levelId: val.levelId,
            priceHourly: val.priceHourly,
            priceDaily: val.priceDaily,
            experience: val.experience,
          })),
        });
      }

      return { master: NewMaster };
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

        include: {
          MasterProfessions: {
            select: {
              id: true,
              minWorkingHours: true,
              priceHourly: true,
              priceDaily: true,
              experience: true,
              level: true,
              profession: true,
            },
          },
        },

        skip: (page - 1) * limit,
        take: Number(limit),

        orderBy: {
          fullName: order,
        },
      });

      const total = await this.prisma.masters.count();
      const totalPages = Math.ceil(total / limit);

      let Pagedata = {
        total,
        totalPages,
        currentPage: page,
        pageSize: limit,
      };

      return { Masters, Pagedata };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Master = await this.prisma.masters.findFirst({
        where: { id },
        include: {
          MasterProfessions: {
            select: {
              id: true,
              minWorkingHours: true,
              priceHourly: true,
              priceDaily: true,
              experience: true,
              level: true,
              profession: true,
            },
          },
        },
      });
      if (!Master) throw new NotFoundException('Master not found ❗');

      return Master;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateMasterDto: UpdateMasterDto) {
    try {
      const { masterProfessions, ...masterData } = updateMasterDto;

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

      const updatedMaster = await this.prisma.masters.update({
        where: { id },
        data: masterData,
      });

      if (masterProfessions && masterProfessions.length > 0) {
        await this.prisma.masterProfessions.deleteMany({
          where: { masterId: id },
        });

        const newMaterProfessions = masterProfessions.map((val) => ({
          masterId: updatedMaster.id,
          professionId: val.professionId,
          minWorkingHours: val.minWorkingHours,
          levelId: val.levelId,
          priceHourly: val.priceHourly,
          priceDaily: val.priceDaily,
          experience: val.experience,
        }));

        await this.prisma.masterProfessions.createMany({
          data: newMaterProfessions,
        });
      }

      return updatedMaster;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const findMaster = await this.findOne(id);
      if (!findMaster) throw new NotFoundException('Master not found ❗');

      let masterAvatar = this.cloudinary.getPublicId(findMaster.avatar);
      let masterPassportImage = this.cloudinary.getPublicId(
        findMaster.passportImage,
      );

      await Promise.allSettled([
        this.cloudinary.deleteImage(masterAvatar),
        this.cloudinary.deleteImage(masterPassportImage),
      ]);

      const delMasters = await this.prisma.masters.delete({ where: { id } });
      return delMasters;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
