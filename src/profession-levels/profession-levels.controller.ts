import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfessionLevelsService } from './profession-levels.service';
import { CreateProfessionLevelDto } from './dto/create-profession-level.dto';
import { UpdateProfessionLevelDto } from './dto/update-profession-level.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('profession-levels')
export class ProfessionLevelsController {
  constructor(
    private readonly professionLevelsService: ProfessionLevelsService,
  ) {}

  @ApiOperation({ summary: 'Create a new ProfessionLevels' })
  @Post()
  create(@Body() createProfessionLevelDto: CreateProfessionLevelDto) {
    return this.professionLevelsService.create(createProfessionLevelDto);
  }

  @ApiOperation({ summary: 'Get all ProfessionLevels' })
  @Get()
  findAll() {
    return this.professionLevelsService.findAll();
  }

  @ApiOperation({ summary: 'Get one ProfessionLevel By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionLevelsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Professions By ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfessionLevelDto: UpdateProfessionLevelDto,
  ) {
    return this.professionLevelsService.update(id, updateProfessionLevelDto);
  }

  @ApiOperation({ summary: 'Delete Professions By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionLevelsService.remove(id);
  }
}