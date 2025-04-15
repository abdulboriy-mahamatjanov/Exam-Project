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
import { PartrensService } from './partrens.service';
import { CreatePartrenDto } from './dto/create-partren.dto';
import { UpdatePartrenDto } from './dto/update-partren.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

@Controller('partrens')
export class PartrensController {
  constructor(private readonly partrensService: PartrensService) {}

  @ApiOperation({ summary: 'Create a new Partners with PartnerDto' })
  @Post()
  create(@Body() createPartrenDto: CreatePartrenDto) {
    return this.partrensService.create(createPartrenDto);
  }

  @ApiOperation({ summary: 'Get all Partners with queries' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({
    enum: ['asc', 'desc'],
    name: 'order',
    type: String,
    required: false,
  })
  @ApiQuery({ name: 'search', required: false, type: String })
  @Get()
  findAll(@Query() query: any) {
    return this.partrensService.findAll(query);
  }

  @ApiOperation({ summary: 'Get one Partner By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partrensService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Partner By ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartrenDto: UpdatePartrenDto) {
    return this.partrensService.update(id, updatePartrenDto);
  }

  @ApiOperation({ summary: 'Delete Partner By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partrensService.remove(id);
  }
}
