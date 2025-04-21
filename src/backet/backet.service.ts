import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBacketDto } from './dto/create-backet.dto';
import { UpdateBacketDto } from './dto/update-backet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class BacketService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBacketDto: CreateBacketDto, req: Request) {
    try {
      const userId = req['user'].id;

      let checkProfession = await this.prisma.professions.findFirst({
        where: { id: createBacketDto.professionId },
      });
      if (!checkProfession)
        throw new BadRequestException('Profession is not available yet ❗');

      let checkTool = await this.prisma.tools.findFirst({
        where: { id: createBacketDto.toolId },
      });
      if (!checkTool)
        throw new BadRequestException('Tool is not available yet ❗');

      let checkLevel = await this.prisma.levels.findFirst({
        where: { id: createBacketDto.levelId },
      });
      if (!checkLevel)
        throw new BadRequestException('Level is not available yet ❗');

      const NewBackets = await this.prisma.backet.create({
        data: createBacketDto,
        include: {
          level: true,
          profession: true,
          tools: true,
        },
      });

      return NewBackets;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const Backets = await this.prisma.backet.findMany({
        select: {
          id: true,
          count: true,
          timeUnit: true,
          workingTime: true,
          totalPrice: true,
          level: true,
          profession: true,
          tools: {
            select: {
              id: true,
              code: true,
              nameUz: true,
              nameRu: true,
              nameEn: true,
              descriptionUz: true,
              descriptionRu: true,
              descriptionEn: false,
            },
          },
        },
      });

      return Backets;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      let Backet = await this.prisma.backet.findFirst({ where: { id } });
      if (!Backet) throw new NotFoundException('Backet not found ❗');

      return Backet;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateBacketDto: UpdateBacketDto) {
    try {
      let Backet = await this.prisma.backet.findFirst({ where: { id } });
      if (!Backet) throw new NotFoundException('Backet not found ❗');

      let checkProfession = await this.prisma.professions.findFirst({
        where: { id: updateBacketDto.professionId },
      });
      if (!checkProfession)
        throw new BadRequestException('Profession is not available yet ❗');

      let checkTool = await this.prisma.tools.findFirst({
        where: { id: updateBacketDto.toolId },
      });
      if (!checkTool)
        throw new BadRequestException('Tool is not available yet ❗');

      let checkLevel = await this.prisma.levels.findFirst({
        where: { id: updateBacketDto.levelId },
      });
      if (!checkLevel)
        throw new BadRequestException('Level is not available yet ❗');

      const NewBackets = await this.prisma.backet.update({
        data: updateBacketDto,
        where: { id },
      });

      return NewBackets;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      let Backet = await this.prisma.backet.findFirst({ where: { id } });
      if (!Backet) throw new NotFoundException('Backet not found ❗');

      const deletedBacket = await this.prisma.backet.delete({ where: { id } });
      return deletedBacket;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
