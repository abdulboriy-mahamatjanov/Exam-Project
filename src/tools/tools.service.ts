import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateToolDto, generateToolCode } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ToolsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createToolDto: CreateToolDto) {
    try {
      let checkBrand = await this.prisma.brands.findFirst({
        where: { id: createToolDto.brandId },
      });
      if (!checkBrand) throw new NotFoundException('Brand not found ❗');

      let checkSize = await this.prisma.sizes.findFirst({
        where: { id: createToolDto.sizeId },
      });
      if (!checkSize) throw new NotFoundException('Size not found ❗');

      let checkCapacity = await this.prisma.capacity.findFirst({
        where: { id: createToolDto.capacityId },
      });
      if (!checkCapacity) throw new NotFoundException('Capacity not found ❗');

      const code = generateToolCode();
      const NewTools = await this.prisma.tools.create({
        data: {
          ...createToolDto,
          code,
        },
      });

      return { NewTools };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const Tools = await this.prisma.tools.findMany();

      return Tools;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Tool = await this.prisma.tools.findFirst({ where: { id } });
      if (!Tool) throw new NotFoundException('Tool not found ❗');

      return Tool;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateToolDto: UpdateToolDto) {
    try {
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
