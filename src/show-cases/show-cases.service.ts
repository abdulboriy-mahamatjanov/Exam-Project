import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateShowCaseDto } from './dto/create-show-case.dto';
import { UpdateShowCaseDto } from './dto/update-show-case.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowCasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createShowCaseDto: CreateShowCaseDto) {
    try {
      const newShowCases = await this.prisma.showCases.create({
        data: createShowCaseDto,
      });

      return { newShowCases };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const {
        page = 1,
        limit = 10,
        order = 'desc',
        orderBy = 'nameUz',
        search = '',
      } = query;

      let languages = ['nameuz', 'nameRu', 'nameEn'];
      let orders = languages.includes(orderBy) ? orderBy : 'nameUz';

      const ShowCases = await this.prisma.showCases.findMany({
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
        skip: (page - 1) * limit,
        take: Number(limit),
        orderBy: { [orders]: order },
      });

      if (!ShowCases.length) return { message: 'No ShowCases found' };

      return { ShowCases };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const ShowCase = await this.prisma.showCases.findFirst({ where: { id } });
      if (!ShowCase) throw new NotFoundException('ShowCase not found ❗');

      return { ShowCase };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateShowCaseDto: UpdateShowCaseDto) {
    try {
      const ShowCase = await this.findOne(id);
      if (!ShowCase) throw new NotFoundException('ShowCase not found ❗');

      const newShowCases = await this.prisma.showCases.update({
        data: updateShowCaseDto,
        where: { id },
      });

      return { newShowCases };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const ShowCase = await this.findOne(id);
      if (!ShowCase) throw new NotFoundException('ShowCase not found ❗');

      await this.prisma.showCases.delete({ where: { id } });
      return { message: 'ShowCase is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
