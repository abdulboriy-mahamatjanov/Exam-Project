import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FrequentlyAskedQuestionsService } from './frequently_asked_questions.service';
import { CreateFrequentlyAskedQuestionDto } from './dto/create-frequently_asked_question.dto';
import { UpdateFrequentlyAskedQuestionDto } from './dto/update-frequently_asked_question.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('frequently-asked-questions')
export class FrequentlyAskedQuestionsController {
  constructor(
    private readonly frequentlyAskedQuestionsService: FrequentlyAskedQuestionsService,
  ) {}

  @ApiOperation({ summary: 'Create a new Frequently_Asked_Questions with DTO' })
  @Post()
  create(
    @Body() createFrequentlyAskedQuestionDto: CreateFrequentlyAskedQuestionDto,
  ) {
    return this.frequentlyAskedQuestionsService.create(
      createFrequentlyAskedQuestionDto,
    );
  }

  @ApiOperation({ summary: 'Get all Frequently_Asked_Questions' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'order', required: false, type: String, enum: ['asc', 'desc']})
  @Get()
  findAll(@Query() query: any) {
    return this.frequentlyAskedQuestionsService.findAll(query);
  }

  @ApiOperation({ summary: 'Get one Frequently_Asked_Question By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frequentlyAskedQuestionsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Frequently_Asked_Question By ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFrequentlyAskedQuestionDto: UpdateFrequentlyAskedQuestionDto,
  ) {
    return this.frequentlyAskedQuestionsService.update(
      id,
      updateFrequentlyAskedQuestionDto,
    );
  }

  @ApiOperation({ summary: 'Delete Frequently_Asked_Question By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frequentlyAskedQuestionsService.remove(id);
  }
}
