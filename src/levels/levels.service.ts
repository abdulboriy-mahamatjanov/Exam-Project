import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LevelsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLevelDto: CreateLevelDto) {
    try {
      const NewLevels = await this.prisma.levels.create({
        data: createLevelDto,
      });

      return { NewLevels };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const { page = 1, limit = 10, search = '', order } = query;
      const Levels = await this.prisma.levels.findMany({
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
              profession: true,
            },
          },

          MasterProfessions: {
            select: {
              id: true,
              minWorkingHours: true,
              priceHourly: true,
              priceDaily: true,
              experience: true,
              master: true,
            },
          },
        },

        skip: (page - 1) * limit,
        take: Number(limit),

        orderBy: {
          nameUz: order,
        },
      });

      return Levels;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Level = await this.prisma.levels.findFirst({
        where: { id },

        include: {
          ProfessionLevels: {
            select: {
              id: true,
              minWorkingHours: true,
              priceHourly: true,
              priceDaily: true,
              profession: true,
            },
          },

          MasterProfessions: {
            select: {
              id: true,
              minWorkingHours: true,
              priceHourly: true,
              priceDaily: true,
              experience: true,
              master: true,
            },
          },
        },
      });
      if (!Level) throw new NotFoundException('Level not found ❗');

      return { Level };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateLevelDto: UpdateLevelDto) {
    try {
      const level = await this.findOne(id);
      if (!level) throw new NotFoundException('Level not found ❗');

      const NewLevels = await this.prisma.levels.update({
        data: updateLevelDto,
        where: { id },
      });

      return { NewLevels };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const level = await this.findOne(id);
      if (!level) throw new NotFoundException('Level not found ❗');

      await this.prisma.levels.delete({ where: { id } });
      return { message: 'Level is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
