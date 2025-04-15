import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DataCompanyService } from './data-company.service';
import { CreateDataCompanyDto } from './dto/create-data-company.dto';
import { UpdateDataCompanyDto } from './dto/update-data-company.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('data-company')
export class DataCompanyController {
  constructor(private readonly dataCompanyService: DataCompanyService) {}

  @ApiOperation({ summary: 'Create a new DataCompanies' })
  @Post()
  create(@Body() createDataCompanyDto: CreateDataCompanyDto) {
    return this.dataCompanyService.create(createDataCompanyDto);
  }

  @ApiOperation({ summary: 'Get all DataCompanies' })
  @Get()
  findAll() {
    return this.dataCompanyService.findAll();
  }

  @ApiOperation({ summary: 'Get one DataCompany By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataCompanyService.findOne(id);
  }

  @ApiOperation({ summary: 'Update DataCompanies Data By ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDataCompanyDto: UpdateDataCompanyDto,
  ) {
    return this.dataCompanyService.update(id, updateDataCompanyDto);
  }

  @ApiOperation({ summary: 'Delete DataCompany By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataCompanyService.remove(id);
  }
}