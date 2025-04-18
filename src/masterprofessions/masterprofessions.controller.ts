import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterprofessionsService } from './masterprofessions.service';
import { CreateMasterprofessionDto } from './dto/create-masterprofession.dto';
import { UpdateMasterprofessionDto } from './dto/update-masterprofession.dto';

@Controller('masterprofessions')
export class MasterprofessionsController {
  constructor(private readonly masterprofessionsService: MasterprofessionsService) {}

  @Post()
  create(@Body() createMasterprofessionDto: CreateMasterprofessionDto) {
    return this.masterprofessionsService.create(createMasterprofessionDto);
  }

  @Get()
  findAll() {
    return this.masterprofessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterprofessionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterprofessionDto: UpdateMasterprofessionDto) {
    return this.masterprofessionsService.update(+id, updateMasterprofessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterprofessionsService.remove(+id);
  }
}
