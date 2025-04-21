import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAboutPageDto } from './dto/create-about-page.dto';
import { UpdateAboutPageDto } from './dto/update-about-page.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AboutPageService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAboutPageDto: CreateAboutPageDto) {
    try {
      const checkEmail = await this.prisma.aboutOurPage.findUnique({
        where: { email: createAboutPageDto.email },
      });

      if (checkEmail)
        throw new BadRequestException(
          `This ${checkEmail.email} Email already in use ❗`,
        );

      const checkphone = await this.prisma.aboutOurPage.findUnique({
        where: { phone: createAboutPageDto.phone },
      });

      if (checkphone)
        throw new BadRequestException(
          `This ${checkphone.phone} PhoneNumber already in use ❗`,
        );

      const NewAboutPages = await this.prisma.aboutOurPage.create({
        data: createAboutPageDto,
      });

      return NewAboutPages;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const AboutPages = await this.prisma.aboutOurPage.findMany();

      return AboutPages;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const AboutPage = await this.prisma.aboutOurPage.findFirst({
        where: { id },
      });
      if (!AboutPage)
        throw new NotFoundException("AboutPage's data not found ❗");

      return AboutPage;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateAboutPageDto: UpdateAboutPageDto) {
    try {
      const aboutpage = await this.findOne(id);
      if (!aboutpage)
        throw new NotFoundException("AboutPage's data not found ❗");

      const NewAboutPages = await this.prisma.aboutOurPage.update({
        data: updateAboutPageDto,
        where: { id },
      });

      return NewAboutPages;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const aboutpage = await this.findOne(id);
      if (!aboutpage)
        throw new NotFoundException("AboutPage's data not found ❗");

      const deletedPage = await this.prisma.aboutOurPage.delete({
        where: { id },
      });
      
      return deletedPage;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
