import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BacketService } from './backet.service';
import { CreateBacketDto } from './dto/create-backet.dto';
import { UpdateBacketDto } from './dto/update-backet.dto';
import { Request } from 'express';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/jwt_token.guard';

@Controller('backet')
export class BacketController {
  constructor(private readonly backetService: BacketService) {}

  @ApiOperation({ summary: 'Create a new Backets' })
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createBacketDto: CreateBacketDto, @Req() req: Request) {
    return this.backetService.create(createBacketDto, req);
  }

  @ApiOperation({ summary: 'Get all Backets' })
  @Get()
  findAll() {
    return this.backetService.findAll();
  }

  @ApiOperation({ summary: 'Get one Backet By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backetService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Backets By ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBacketDto: UpdateBacketDto) {
    return this.backetService.update(id, updateBacketDto);
  }

  @ApiOperation({ summary: 'Delete Backets By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backetService.remove(id);
  }
}
