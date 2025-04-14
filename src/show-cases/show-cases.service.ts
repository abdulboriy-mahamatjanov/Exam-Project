import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateShowCaseDto } from './dto/create-show-case.dto';
import { UpdateShowCaseDto } from './dto/update-show-case.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowCasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createShowCaseDto: CreateShowCaseDto) {
    try {
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateShowCaseDto: UpdateShowCaseDto) {
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
