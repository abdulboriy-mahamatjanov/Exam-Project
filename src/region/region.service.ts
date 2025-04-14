import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RegionService {
  constructor(private prisma: PrismaService) {}

  async findRegion(id: string) {
    try {
      const Region = await this.prisma.regions.findFirst({ where: { id } });
      if (!Region) throw new NotFoundException('Region not found ❗');

      return { Region };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async create(createRegionDto: CreateRegionDto) {
    try {
      const NewRegions = await this.prisma.regions.create({
        data: createRegionDto,
      });

      return { NewRegions };
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

      const Regions = await this.prisma.regions.findMany({
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

      if (!Regions.length) return { message: 'No Regions found' };

      return { Regions };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Region = await this.findRegion(id);

      return { Region };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    try {
      await this.findRegion(id);

      const NewRegions = await this.prisma.regions.update({
        data: updateRegionDto,
        where: { id },
      });

      return { NewRegions };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      await this.findRegion(id);
      await this.prisma.regions.delete({ where: { id } });
      return { message: 'Region is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
