import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFrequentlyAskedQuestionDto } from './dto/create-frequently_asked_question.dto';
import { UpdateFrequentlyAskedQuestionDto } from './dto/update-frequently_asked_question.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FrequentlyAskedQuestionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createFrequentlyAskedQuestionDto: CreateFrequentlyAskedQuestionDto,
  ) {
    try {
      const NewFAQS = await this.prisma.fAQ.create({
        data: createFrequentlyAskedQuestionDto,
      });

      return NewFAQS;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: any) {
    try {
      const { page = 1, limit = 10, search = '', order = 'desc' } = query;

      const FAQS = await this.prisma.fAQ.findMany({
        where: {
          OR: [
            {
              question: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              answer: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        },

        skip: (page - 1) * limit,
        take: Number(limit),

        orderBy: {
          question: order,
        },
      });

      const data = { FAQS, Length: FAQS.length };

      return data;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const FAQ = await this.prisma.fAQ.findFirst({ where: { id } });
      if (!FAQ)
        throw new NotFoundException('Frequently_Asked_Question not found ❗');

      return FAQ;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(
    id: string,
    updateFrequentlyAskedQuestionDto: UpdateFrequentlyAskedQuestionDto,
  ) {
    try {
      const faq = await this.findOne(id);
      if (!faq)
        throw new NotFoundException('Frequently_Asked_Question not found ❗');

      const NewFAQS = await this.prisma.fAQ.update({
        data: updateFrequentlyAskedQuestionDto,
        where: { id },
      });

      return NewFAQS;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const faq = await this.findOne(id);
      if (!faq)
        throw new NotFoundException('Frequently_Asked_Question not found ❗');

      const deletedFaq = await this.prisma.fAQ.delete({ where: { id } });
      return deletedFaq;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
