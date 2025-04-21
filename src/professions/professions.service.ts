import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/uploads/uploads.service';

@Injectable()
export class ProfessionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  async create(createProfessionDto: CreateProfessionDto) {
    try {
      const { professionLevels, toolProfessions, ...professionData } =
        createProfessionDto;

      let professionImage = this.cloudinary.getPublicId(
        createProfessionDto.avatar,
      );
      let checkProfImage = await this.cloudinary.checkImage(professionImage);
      if (!checkProfImage)
        throw new BadRequestException('Image is not available yet ❗');

      const finTools = await this.prisma.tools.findMany({
        where: {
          id: {
            in: toolProfessions,
          },
        },
        select: {
          id: true,
        },
      });

      const checkTools = finTools.map((tool) => tool.id);
      const invalidTools = toolProfessions.filter(
        (id) => !checkTools.includes(id),
      );

      if (invalidTools.length > 0) {
        throw new BadRequestException('Tool not found ❗');
      }

      const newprofession = await this.prisma.professions.create({
        data: professionData,
        include: { ProfessionLevels: true, ProfessionTools: true },
      });

      if (toolProfessions && toolProfessions.length > 0) {
        const toolProfessionsData = toolProfessions.map((toolId) => ({
          professionId: newprofession.id,
          toolId,
        }));

        await this.prisma.professionTools.createMany({
          data: toolProfessionsData,
        });
      }

      if (professionLevels && professionLevels.length > 0) {
        const professionLevelsData = professionLevels.map((val) => ({
          professionId: newprofession.id,
          levelId: val.levelId,
          minWorkingHours: val.minWorkingHours,
          priceHourly: val.priceHourly,
          priceDaily: val.priceDaily,
        }));

        await this.prisma.professionLevels.createMany({
          data: professionLevelsData,
        });
      }

      return { newprofession };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const {
        page = 1,
        limit = 10,
        search = '',
        order = 'desc',
        orderBy = 'nameUz',
      } = query;

      const languages = ['nameUz', 'nameRu', 'nameEn'];
      const orders = languages.includes(orderBy) ? orderBy : 'nameUz';

      const Professions = await this.prisma.professions.findMany({
        where: {
          OR: [
            {
              nameUz: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              nameRu: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              nameEn: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        },

        include: {
          ProfessionLevels: {
            select: {
              id: true,
              minWorkingHours: true,
              priceHourly: true,
              priceDaily: true,
              level: true,
            },
          },

          ProfessionTools: {
            select: {
              id: true,
              professions: true,
              tools: {
                select: {
                  id: true,
                  code: true,
                  nameUz: true,
                  nameRu: true,
                  nameEn: true,
                  descriptionUz: true,
                  descriptionRu: true,
                  descriptionEn: true,
                  price: true,
                  quantity: true,
                  image: true,
                  isAvailable: true,
                  createdAt: true,
                  updatedAt: true,
                  brand: true,
                  capacity: true,
                  size: true,
                },
              },
            },
          },
        },

        skip: (page - 1) * limit,
        take: Number(limit),

        orderBy: { [orders]: order },
      });

      return Professions;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Profession = await this.prisma.professions.findFirst({
        where: { id },
        include: {
          ProfessionLevels: {
            select: {
              id: true,
              minWorkingHours: true,
              priceHourly: true,
              priceDaily: true,
              level: true,
            },
          },

          ProfessionTools: {
            select: {
              id: true,
              professions: true,
              tools: {
                select: {
                  id: true,
                  code: true,
                  nameUz: true,
                  nameRu: true,
                  nameEn: true,
                  descriptionUz: true,
                  descriptionRu: true,
                  descriptionEn: true,
                  price: true,
                  quantity: true,
                  image: true,
                  isAvailable: true,
                  createdAt: true,
                  updatedAt: true,
                  brand: true,
                  capacity: true,
                  size: true,
                },
              },
            },
          },
        },
      });

      if (!Profession) throw new NotFoundException('Profession not found ❗');

      return Profession;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateProfessionDto: UpdateProfessionDto) {
    try {
      const { professionLevels, toolProfessions, ...professionData } =
        updateProfessionDto;

      const existingProfession = await this.prisma.professions.findFirst({
        where: { id },
      });
      if (!existingProfession)
        throw new NotFoundException('Profession not found ❗');

      const oldProfessionImage = this.cloudinary.getPublicId(
        existingProfession.avatar,
      );

      if (updateProfessionDto.avatar) {
        const isImageAvailable =
          await this.cloudinary.checkImage(oldProfessionImage);
        if (!isImageAvailable)
          throw new BadRequestException('Image is not available yet❗');

        await this.cloudinary.deleteImage(oldProfessionImage);
      }

      const updatedProfession = await this.prisma.professions.update({
        where: { id },
        data: professionData,
        include: {
          ProfessionLevels: true,
          ProfessionTools: {
            select: {
              id: true,
              professions: true,
              tools: {
                select: {
                  id: true,
                  code: true,
                  nameUz: true,
                  nameRu: true,
                  nameEn: true,
                  descriptionUz: true,
                  descriptionRu: true,
                  descriptionEn: true,
                  price: true,
                  quantity: true,
                  image: true,
                  isAvailable: true,
                  createdAt: true,
                  updatedAt: true,
                  brand: true,
                  capacity: true,
                  size: true,
                },
              },
            },
          },
        },
      });

      if (professionLevels?.length) {
        await this.prisma.professionLevels.deleteMany({
          where: { professionId: id },
        });

        await this.prisma.professionLevels.createMany({
          data: professionLevels.map((val) => ({
            professionId: updatedProfession.id,
            levelId: val.levelId,
            minWorkingHours: val.minWorkingHours,
            priceHourly: val.priceHourly,
            priceDaily: val.priceDaily,
          })),
        });
      }

      if (toolProfessions?.length) {
        await this.prisma.professionTools.deleteMany({
          where: { professionId: id },
        });

        await this.prisma.professionTools.createMany({
          data: toolProfessions.map((val) => ({
            professionId: updatedProfession.id,
            toolId: val,
          })),
        });
      }

      return updatedProfession;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      let finProf = await this.prisma.professions.findFirst({ where: { id } });
      if (!finProf) throw new NotFoundException('Profession not found ❗');

      let professionImage = this.cloudinary.getPublicId(finProf.avatar);

      let checkProfImage = await this.cloudinary.checkImage(professionImage);
      if (checkProfImage) {
        await this.cloudinary.deleteImage(professionImage);
      }

      await this.prisma.professions.delete({ where: { id } });

      return { message: 'Profession is sucessfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
