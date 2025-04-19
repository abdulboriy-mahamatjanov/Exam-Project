import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CapacityService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCapacityDto: CreateCapacityDto) {
    try {
      const NewCapacities = await this.prisma.capacity.create({
        data: createCapacityDto,
      });

      return { NewCapacities };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const { page = 1, limit = 10, search = '', order } = query;
      const Capacities = await this.prisma.capacity.findMany({
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

      return Capacities;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Capacity = await this.prisma.capacity.findFirst({ where: { id } });
      if (!Capacity) throw new NotFoundException('Capacity not found ❗');

      return { Capacity };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateCapacityDto: UpdateCapacityDto) {
    try {
      const Capacity = await this.findOne(id);
      if (!Capacity) throw new NotFoundException('Capacity not found ❗');

      const NewCapacities = await this.prisma.capacity.update({
        data: updateCapacityDto,
        where: { id },
      });

      return { NewCapacities };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const capacity = await this.findOne(id);
      if (!capacity) throw new NotFoundException('Capacity not found ❗');

      await this.prisma.capacity.delete({ where: { id } });
      return { message: 'Capacity is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
