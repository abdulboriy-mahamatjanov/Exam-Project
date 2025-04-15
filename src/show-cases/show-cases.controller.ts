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
import { ShowCasesService } from './show-cases.service';
import { CreateShowCaseDto } from './dto/create-show-case.dto';
import { UpdateShowCaseDto } from './dto/update-show-case.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('ShowCases')
@Controller('show-cases')
export class ShowCasesController {
  constructor(private readonly showCasesService: ShowCasesService) {}

  @ApiOperation({ summary: 'Create a new ShowCases with ShowCaseDto' })
  @Post()
  create(@Body() createShowCaseDto: CreateShowCaseDto) {
    return this.showCasesService.create(createShowCaseDto);
  }

  @ApiOperation({ summary: 'Get all ShowCases' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({
    name: 'order',
    type: String,
    required: false,
    enum: ['asc', 'desc'],
  })
  @ApiQuery({ name: 'search', type: String, required: false })
  @Get()
  findAll(@Query() query: any) {
    return this.showCasesService.findAll(query);
  }

  @ApiOperation({ summary: 'Get one ShowCase By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showCasesService.findOne(id);
  }

  @ApiOperation({ summary: 'Update ShowCases By ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShowCaseDto: UpdateShowCaseDto,
  ) {
    return this.showCasesService.update(id, updateShowCaseDto);
  }

  @ApiOperation({ summary: 'Delete ShowCases By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showCasesService.remove(id);
  }
}
