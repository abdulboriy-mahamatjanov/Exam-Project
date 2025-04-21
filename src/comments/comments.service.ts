import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    try {
      const NewComments = await this.prisma.comments.create({
        data: createCommentDto,
      });

      return NewComments;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const Comments = await this.prisma.comments.findMany();
      if (!Comments.length) return { message: 'No Comments found' };

      return Comments;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const comment = await this.prisma.comments.findFirst({ where: { id } });
      if (!comment) throw new NotFoundException('Comment not found ❗');

      return comment;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    try {
      const comment = await this.findOne(id);
      if (!comment) throw new NotFoundException('Comment not found ❗');

      const NewComments = await this.prisma.comments.update({
        data: updateCommentDto,
        where: { id },
      });

      return NewComments;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const comment = await this.findOne(id);
      if (!comment) throw new NotFoundException('Comment not found ❗');

      const deletedComment = await this.prisma.comments.delete({
        where: { id },
      });

      return deletedComment;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
