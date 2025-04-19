import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterprofessionsService } from './masterprofessions.service';
import { CreateMasterprofessionDto } from './dto/create-masterprofession.dto';
import { UpdateMasterprofessionDto } from './dto/update-masterprofession.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('masterprofessions')
export class MasterprofessionsController {
  constructor(
    private readonly masterprofessionsService: MasterprofessionsService,
  ) {}

  @ApiOperation({ summary: 'Create a new MasterProfessions' })
  @Post()
  create(@Body() createMasterprofessionDto: CreateMasterprofessionDto) {
    return this.masterprofessionsService.create(createMasterprofessionDto);
  }

  @ApiOperation({ summary: 'Get all MasterProfessions' })
  @Get()
  findAll() {
    return this.masterprofessionsService.findAll();
  }

  @ApiOperation({ summary: 'Get one MasterProfession By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterprofessionsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update MasterProfession By ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMasterprofessionDto: UpdateMasterprofessionDto,
  ) {
    return this.masterprofessionsService.update(id, updateMasterprofessionDto);
  }

  @ApiOperation({ summary: 'Delete MasterProfession By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterprofessionsService.remove(id);
  }
}
