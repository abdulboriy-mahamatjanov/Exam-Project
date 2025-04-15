import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePartrenDto } from './dto/create-partren.dto';
import { UpdatePartrenDto } from './dto/update-partren.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartrensService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPartrenDto: CreatePartrenDto) {
    try {
      const NewPartners = await this.prisma.partners.create({
        data: createPartrenDto,
      });

      return { NewPartners };
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

      const languages = ['nameUz', 'nameRu', 'nameEn'];
      const orders = languages.includes(orderBy) ? orderBy : 'nameUz';

      const Partners = await this.prisma.partners.findMany({
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
      if (!Partners.length) return { message: 'No Partners found' };

      return { Partners };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Partner = await this.prisma.partners.findFirst({ where: { id } });
      if (!Partner) throw new NotFoundException('Partner not found ❗');

      return { Partner };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updatePartrenDto: UpdatePartrenDto) {
    try {
      const partner = await this.findOne(id);
      if (!partner) throw new NotFoundException('Partner not found ❗');

      const NewPartners = await this.prisma.partners.update({
        data: updatePartrenDto,
        where: { id },
      });

      return { NewPartners };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const partner = await this.findOne(id);
      if (!partner) throw new NotFoundException('Partner not found ❗');

      await this.prisma.partners.delete({ where: { id } });
      return { message: 'Partner is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
