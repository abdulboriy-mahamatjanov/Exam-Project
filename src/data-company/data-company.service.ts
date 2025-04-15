import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDataCompanyDto } from './dto/create-data-company.dto';
import { UpdateDataCompanyDto } from './dto/update-data-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DataCompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDataCompanyDto: CreateDataCompanyDto) {
    try {
      const NewDataCompany = await this.prisma.dataAboutCompany.create({
        data: createDataCompanyDto,
      });

      return { NewDataCompany };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const DataCompanies = await this.prisma.dataAboutCompany.findMany();
      if (!DataCompanies.length)
        return { message: 'No DataCompanies Data found' };

      return { DataCompanies };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const DataCompany = await this.prisma.dataAboutCompany.findFirst({
        where: { id },
      });

      if (!DataCompany) throw new NotFoundException('DataCompany not found ❗');

      return { DataCompany };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateDataCompanyDto: UpdateDataCompanyDto) {
    try {
      const datacompany = await this.findOne(id);
      if (!datacompany) throw new NotFoundException('DataCompany not found ❗');

      const NewDataCompanies = await this.prisma.dataAboutCompany.update({
        data: updateDataCompanyDto,
        where: { id },
      });

      return { NewDataCompanies };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const datacompany = await this.findOne(id);
      if (!datacompany) throw new NotFoundException('DataCompany not found ❗');

      await this.prisma.dataAboutCompany.delete({ where: { id } });
      return { message: 'DataCompany is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}