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
import { SizesService } from './sizes.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('sizes')
export class SizesController {
  constructor(private readonly sizesService: SizesService) {}

  @ApiOperation({ summary: 'Create a new Sizes with SizeDto' })
  @Post()
  create(@Body() createSizeDto: CreateSizeDto) {
    return this.sizesService.create(createSizeDto);
  }

  @ApiOperation({ summary: 'Get all Sizes' })
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
    return this.sizesService.findAll(query);
  }

  @ApiOperation({ summary: 'Get one Size By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sizesService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Sizes with SizeDto By ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return this.sizesService.update(id, updateSizeDto);
  }

  @ApiOperation({ summary: 'Delete Sizes By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sizesService.remove(id);
  }
}
