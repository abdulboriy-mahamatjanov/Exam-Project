import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SizesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSizeDto: CreateSizeDto) {
    try {
      const NewSizes = await this.prisma.sizes.create({
        data: createSizeDto,
      });

      return { NewSizes };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const { page = 1, limit = 10, search = '', order } = query;
      const Sizes = await this.prisma.sizes.findMany({
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

      return Sizes;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Size = await this.prisma.sizes.findFirst({ where: { id } });
      if (!Size) throw new NotFoundException('Size not found ❗');

      return { Size };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateSizeDto: UpdateSizeDto) {
    try {
      const size = await this.findOne(id);
      if (!size) throw new NotFoundException('Size not found ❗');

      const NewSizes = await this.prisma.sizes.update({
        data: updateSizeDto,
        where: { id },
      });

      return { NewSizes };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const size = await this.findOne(id);
      if (!size) throw new NotFoundException('Size not found ❗');

      await this.prisma.sizes.delete({ where: { id } });
      return { message: 'Size is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
