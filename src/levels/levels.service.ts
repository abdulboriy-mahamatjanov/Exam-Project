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

  async findAll() {
    try {
      const Levels = await this.prisma.levels.findMany();
      if (!Levels.length) return { message: 'No Levels found' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Level = await this.prisma.levels.findFirst({ where: { id } });
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
