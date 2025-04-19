import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMasterprofessionDto } from './dto/create-masterprofession.dto';
import { UpdateMasterprofessionDto } from './dto/update-masterprofession.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MasterprofessionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMasterprofessionDto: CreateMasterprofessionDto) {
    try {
      let checkProfession = await this.prisma.professions.findFirst({
        where: { id: createMasterprofessionDto.professionId },
      });
      if (!checkProfession)
        throw new NotFoundException('Profession not found ❗');

      let checkLevels = await this.prisma.levels.findFirst({
        where: { id: createMasterprofessionDto.levelId },
      });
      if (!checkLevels) throw new NotFoundException('Lelev not found ❗');

      let checkMaster = await this.prisma.masters.findFirst({
        where: { id: createMasterprofessionDto.masterId },
      });
      if (!checkMaster) throw new NotFoundException('Master not found ❗');

      const NewMasterProfessions = await this.prisma.masterProfessions.create({
        data: createMasterprofessionDto,
      });

      return { NewMasterProfessions };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const data = await this.prisma.masterProfessions.findMany();

      return data;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const data = await this.prisma.masterProfessions.findFirst({
        where: { id },
      });

      if (!data) throw new NotFoundException('MasterProfession not found ❗');

      return data;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(
    id: string,
    updateMasterprofessionDto: UpdateMasterprofessionDto,
  ) {
    try {
      const masterprofession = await this.prisma.masterProfessions.findFirst({
        where: { id },
      });

      if (!masterprofession)
        throw new NotFoundException('MasterProfession not found ❗');

      let checkProfession = await this.prisma.professions.findFirst({
        where: { id: updateMasterprofessionDto.professionId },
      });
      if (!checkProfession)
        throw new NotFoundException('Profession not found ❗');

      let checkLevels = await this.prisma.levels.findFirst({
        where: { id: updateMasterprofessionDto.levelId },
      });
      if (!checkLevels) throw new NotFoundException('Level not found ❗');

      let checkMaster = await this.prisma.masters.findFirst({
        where: { id: updateMasterprofessionDto.masterId },
      });
      if (!checkMaster) throw new NotFoundException('Master not found ❗');

      const NewMasterProfessions = await this.prisma.masterProfessions.update({
        data: updateMasterprofessionDto,
        where: { id },
      });

      return NewMasterProfessions;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const masterprofession = await this.prisma.masterProfessions.findFirst({
        where: { id },
      });

      if (!masterprofession)
        throw new NotFoundException('MasterProfession not found ❗');

      await this.prisma.masterProfessions.delete({ where: { id } });
      return { message: 'MasterProfession is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
