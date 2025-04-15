import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AboutPageService } from './about-page.service';
import { CreateAboutPageDto } from './dto/create-about-page.dto';
import { UpdateAboutPageDto } from './dto/update-about-page.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('about-page')
export class AboutPageController {
  constructor(private readonly aboutPageService: AboutPageService) {}

  @ApiOperation({ summary: 'Create a new About-Pages with Dto' })
  @Post()
  create(@Body() createAboutPageDto: CreateAboutPageDto) {
    return this.aboutPageService.create(createAboutPageDto);
  }

  @ApiOperation({ summary: 'Get all Datas about Pages' })
  @Get()
  findAll() {
    return this.aboutPageService.findAll();
  }

  @ApiOperation({ summary: 'Get one data about Page By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutPageService.findOne(id);
  }

  @ApiOperation({ summary: 'Update datas about Page By ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAboutPageDto: UpdateAboutPageDto,
  ) {
    return this.aboutPageService.update(id, updateAboutPageDto);
  }

  @ApiOperation({ summary: 'Delete datas about Page By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutPageService.remove(id);
  }
}
