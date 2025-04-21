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

  async create(createRegionDto: CreateRegionDto) {
    try {
      const NewRegions = await this.prisma.regions.create({
        data: createRegionDto,
      });

      return NewRegions;
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

      let total = await this.prisma.regions.count();
      let totalPages = Math.ceil(total / limit);

      let pageData = {
        total,
        totalPages,
        currentPage: page,
        pageSize: limit,
      };

      return { Regions, pageData };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const findRegion = await this.prisma.regions.findFirst({
        where: { id },
        include: {
          Users: {
            select: {
              id: true,
              fullName: true,
              phone: true,
              password: true,
              role: true,
              status: true,
              avatar: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });
      if (!findRegion) throw new NotFoundException('Region not found ❗');

      return findRegion;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    try {
      const findRegion = await this.prisma.regions.findFirst({ where: { id } });
      if (!findRegion) throw new NotFoundException('Region not found ❗');

      const newRegion = await this.prisma.regions.update({
        data: updateRegionDto,
        where: { id },
      });

      return newRegion;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const findRegion = await this.prisma.regions.findFirst({ where: { id } });
      if (!findRegion) throw new NotFoundException('Region not found ❗');

      const deletedRegion = await this.prisma.regions.delete({ where: { id } });
      return deletedRegion;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
