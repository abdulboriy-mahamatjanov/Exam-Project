import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBrandDto: CreateBrandDto) {
    try {
      const NewBrands = await this.prisma.brands.create({
        data: createBrandDto,
      });

      return { NewBrands };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const { page = 1, limit = 10, search = '', order } = query;
      const Brands = await this.prisma.brands.findMany({
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

        orderBy: {
          nameUz: order,
        },
      });

      if (!Brands.length) return { message: 'No Brands found' };

      return { Brands };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Brands = await this.prisma.brands.findFirst({ where: { id } });
      if (!Brands) throw new NotFoundException('Brands not found ❗');

      return { Brands };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    try {
      const Brands = await this.findOne(id);
      if (!Brands) throw new NotFoundException('Brands not found ❗');

      const NewBrands = await this.prisma.brands.update({
        data: updateBrandDto,
        where: { id },
      });

      return { NewBrands };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const brands = await this.findOne(id);
      if (!brands) throw new NotFoundException('Brands not found ❗');

      await this.prisma.brands.delete({ where: { id } });
      return { message: 'Brand is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
