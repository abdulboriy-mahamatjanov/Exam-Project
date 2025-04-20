import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateToolDto, generateToolCode } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/uploads/uploads.service';

@Injectable()
export class ToolsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinary: CloudinaryService,
  ) {}

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

      let toolImage = this.cloudinary.getPublicId(createToolDto.image);
      let checkToolImage = await this.cloudinary.checkImage(toolImage);

      if (!checkToolImage)
        throw new BadRequestException('ToolImage is not available yet ❗');

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
      const Tools = await this.prisma.tools.findMany({
        include: {
          size: {
            select: {
              id: true,
              nameUz: true,
              nameRu: true,
              nameEn: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          capacity: {
            select: {
              id: true,
              nameUz: true,
              nameRu: true,
              nameEn: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          brand: {
            select: {
              id: true,
              nameUz: true,
              nameRu: true,
              nameEn: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          ProfessionTools: {
            select: {
              id: true,
              professions: true,
            },
          },
        },
      });

      return Tools;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Tool = await this.prisma.tools.findFirst({
        where: { id },
        include: {
          size: {
            select: {
              id: true,
              nameUz: true,
              nameRu: true,
              nameEn: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          brand: {
            select: {
              id: true,
              nameUz: true,
              nameRu: true,
              nameEn: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          capacity: {
            select: {
              id: true,
              nameUz: true,
              nameRu: true,
              nameEn: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          ProfessionTools: {
            select: {
              id: true,
              professions: true,
            },
          },
        },
      });
      if (!Tool) throw new NotFoundException('Tool not found ❗');

      return Tool;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateToolDto: UpdateToolDto) {
    try {
      const Tool = await this.prisma.tools.findFirst({ where: { id } });
      if (!Tool) throw new NotFoundException('Tool not found ❗');

      let checkBrand = await this.prisma.brands.findFirst({
        where: { id: updateToolDto.brandId },
      });
      if (!checkBrand) throw new NotFoundException('Brand not found ❗');

      let checkSize = await this.prisma.sizes.findFirst({
        where: { id: updateToolDto.sizeId },
      });
      if (!checkSize) throw new NotFoundException('Size not found ❗');

      let checkCapacity = await this.prisma.capacity.findFirst({
        where: { id: updateToolDto.capacityId },
      });
      if (!checkCapacity) throw new NotFoundException('Capacity not found ❗');

      let oldToolImage = this.cloudinary.getPublicId(updateToolDto.image);
      if (updateToolDto.image) {
        let newToolImage = this.cloudinary.getPublicId(oldToolImage);

        if (!newToolImage)
          throw new BadRequestException('ToolImage is not available yet ❗');

        if (oldToolImage !== newToolImage) {
          await this.cloudinary.deleteImage(oldToolImage);
        }
      }

      const code = generateToolCode();

      const NewTools = await this.prisma.tools.update({
        data: { ...updateToolDto, code },
        where: { id },
      });

      return { NewTools };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const Tool = await this.prisma.tools.findFirst({ where: { id } });
      if (!Tool) throw new NotFoundException('Tool not found ❗');

      let toolImage = this.cloudinary.getPublicId(Tool.image);
      const checkImage = await this.cloudinary.checkImage(toolImage);
      if (checkImage) await this.cloudinary.deleteImage(toolImage);

      await this.prisma.tools.delete({ where: { id } });
      return { message: 'Tool is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
