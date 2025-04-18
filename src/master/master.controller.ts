import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/jwt_token.guard';
import { RoleGuard } from 'src/guards/rolePolice.guard';
import { Roles } from 'src/guards/role.decorator';
import { UserRoles } from 'src/auth/dto/register-user.dto';

@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @ApiOperation({ summary: 'Create a new Masters with MasterDto' })
  // @Roles(UserRoles.ADMIN)
  // @UseGuards(RoleGuard)
  // @UseGuards(AuthGuard)
  @Post()
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.masterService.create(createMasterDto);
  }

  @ApiOperation({ summary: 'Get all Masters' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({
    name: 'order',
    required: false,
    type: String,
    enum: ['asc', 'desc'],
  })
  @ApiQuery({ name: 'search', required: false, type: String })
  @Get()
  findAll(@Query() query: any) {
    return this.masterService.findAll(query);
  }

  @ApiOperation({ summary: 'Get one Master By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Masters By ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    return this.masterService.update(id, updateMasterDto);
  }

  @ApiOperation({ summary: 'Delete Masters By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterService.remove(id);
  }
}
