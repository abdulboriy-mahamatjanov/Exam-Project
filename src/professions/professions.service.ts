import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/uploads/uploads.service';

@Injectable()
export class ProfessionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  async create(createProfessionDto: CreateProfessionDto) {
    try {
      let professionImage = this.cloudinary.getPublicId(
        createProfessionDto.avatar,
      );
      let checkProfImage = await this.cloudinary.checkImage(professionImage);
      if (!checkProfImage)
        throw new BadRequestException('Image is not available yet ❗');

      const NewProfessions = await this.prisma.professions.create({
        data: createProfessionDto,
      });

      return NewProfessions;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const {
        page = 1,
        limit = 10,
        search = '',
        order = 'desc',
        orderBy = 'nameUz',
      } = query;

      const languages = ['nameUz', 'nameRu', 'nameEn'];
      const orders = languages.includes(orderBy) ? orderBy : 'nameUz';

      const Professions = await this.prisma.professions.findMany({
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

      return Professions;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Profession = await this.prisma.professions.findFirst({
        where: { id },
      });

      if (!Profession) throw new NotFoundException('Profession not found ❗');

      return Profession;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateProfessionDto: UpdateProfessionDto) {
    try {
      let finProf = await this.prisma.professions.findFirst({ where: { id } });
      if (!finProf) throw new NotFoundException('Profession not found ❗');

      let oldProfessionImage = this.cloudinary.getPublicId(finProf.avatar);

      if (updateProfessionDto.avatar) {
        let NewProfessionImage =
          this.cloudinary.getPublicId(oldProfessionImage);

        const checkImage = await this.cloudinary.checkImage(oldProfessionImage);
        if (!checkImage)
          throw new BadRequestException('Image is not available yet❗');

        if (NewProfessionImage !== oldProfessionImage) {
          await this.cloudinary.deleteImage(oldProfessionImage);
        }

        const NewProfessions = await this.prisma.professions.update({
          data: updateProfessionDto,
          where: { id },
        });

        return NewProfessions;
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      let finProf = await this.prisma.professions.findFirst({ where: { id } });
      if (!finProf) throw new NotFoundException('Profession not found ❗');

      let professionImage = this.cloudinary.getPublicId(finProf.avatar);

      let checkProfImage = await this.cloudinary.checkImage(professionImage);
      if (checkProfImage) {
        await this.cloudinary.deleteImage(professionImage);
      }
      await this.prisma.professions.delete({ where: { id } });

      return { message: 'Profession is sucessfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
