import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToolsService } from './tools.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @ApiOperation({ summary: 'Create a new Tools' })
  @Post()
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolsService.create(createToolDto);
  }

  @ApiOperation({ summary: 'Get all Tools' })
  @Get()
  findAll() {
    return this.toolsService.findAll();
  }

  @ApiOperation({ summary: 'Get one Tool By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toolsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Tools By ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToolDto: UpdateToolDto) {
    return this.toolsService.update(id, updateToolDto);
  }

  @ApiOperation({ summary: 'Delete Tools By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toolsService.remove(id);
  }
}
