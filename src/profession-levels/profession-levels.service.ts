import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfessionLevelDto } from './dto/create-profession-level.dto';
import { UpdateProfessionLevelDto } from './dto/update-profession-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessionLevelsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfessionLevelDto: CreateProfessionLevelDto) {
    try {
      let checkProfession = await this.prisma.professions.findFirst({
        where: { id: createProfessionLevelDto.professionId },
      });
      if (!checkProfession)
        throw new NotFoundException('Profession not found ❗');

      let checkLevel = await this.prisma.levels.findFirst({
        where: { id: createProfessionLevelDto.levelId },
      });
      if (!checkLevel) throw new NotFoundException('Level not found ❗');

      const NewProfessionLevels = await this.prisma.professionLevels.create({
        data: createProfessionLevelDto,
      });

      return NewProfessionLevels;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const ProfessionLevels = await this.prisma.professionLevels.findMany();

      return ProfessionLevels;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const ProfessionLevel = await this.prisma.professionLevels.findFirst({
        where: { id },
      });

      if (!ProfessionLevel)
        throw new NotFoundException('ProfessionLevel not found ❗');

      return ProfessionLevel;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateProfessionLevelDto: UpdateProfessionLevelDto) {
    try {
      const ProfessionLevel = await this.prisma.professionLevels.findFirst({
        where: { id },
      });
      if (!ProfessionLevel)
        throw new NotFoundException('ProfessionLevel not found ❗');

      let checkProfession = await this.prisma.professions.findFirst({
        where: { id: updateProfessionLevelDto.professionId },
      });
      if (!checkProfession)
        throw new NotFoundException('Profession not found ❗');

      let checkLevel = await this.prisma.levels.findFirst({
        where: { id: updateProfessionLevelDto.levelId },
      });
      if (!checkLevel) throw new NotFoundException('Level not found ❗');

      const NewProfessionLevels = await this.prisma.professionLevels.update({
        data: updateProfessionLevelDto,
        where: { id },
      });

      return NewProfessionLevels;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const ProfessionLevel = await this.prisma.professionLevels.findFirst({
        where: { id },
      });
      if (!ProfessionLevel)
        throw new NotFoundException('ProfessionLevel not found ❗');

      await this.prisma.professionLevels.delete({ where: { id } });
      return { message: 'ProfessionLevel is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}