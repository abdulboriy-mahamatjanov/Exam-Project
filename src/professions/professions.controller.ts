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
import { ProfessionsService } from './professions.service';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('professions')
export class ProfessionsController {
  constructor(private readonly professionsService: ProfessionsService) {}

  @ApiOperation({ summary: 'Create a new Professions with ProfessionDto' })
  @Post()
  create(@Body() createProfessionDto: CreateProfessionDto) {
    return this.professionsService.create(createProfessionDto);
  }

  @ApiOperation({ summary: 'Get all CreateProfessionDto' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({
    name: 'order',
    required: false,
    type: String,
    enum: ['asc', 'desc'],
  })
  @Get()
  findAll(@Query() query: any) {
    return this.professionsService.findAll(query);
  }

  @ApiOperation({ summary: 'Get one Profession By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionsService.findOne(id);
  }

  @ApiOperation({
    summary: 'Update Professions with UpdateProfessionDto By ID',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfessionDto: UpdateProfessionDto,
  ) {
    return this.professionsService.update(id, updateProfessionDto);
  }

  @ApiOperation({ summary: 'Delete Professions By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionsService.remove(id);
  }
}
