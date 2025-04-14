import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShowCasesService } from './show-cases.service';
import { CreateShowCaseDto } from './dto/create-show-case.dto';
import { UpdateShowCaseDto } from './dto/update-show-case.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ShowCases')
@Controller('show-cases')
export class ShowCasesController {
  constructor(private readonly showCasesService: ShowCasesService) {}

  @Post()
  create(@Body() createShowCaseDto: CreateShowCaseDto) {
    return this.showCasesService.create(createShowCaseDto);
  }

  @Get()
  findAll() {
    return this.showCasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showCasesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShowCaseDto: UpdateShowCaseDto,
  ) {
    return this.showCasesService.update(id, updateShowCaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showCasesService.remove(id);
  }
}
