import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/jwt_token.guard';
import { RoleGuard } from 'src/guards/rolePolice.guard';
import { Roles } from 'src/guards/role.decorator';
import { UserRoles } from 'src/auth/dto/register-user.dto';

@ApiTags('Regions')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Roles(UserRoles.ADMIN)
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new Regions' })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Enter the page number',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Enter the limit number',
  })
  @ApiQuery({
    name: 'order',
    required: false,
    type: String,
    enum: ['asc', 'desc'],
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Enter the Region name',
  })
  @ApiOperation({ summary: 'Get all Regions' })
  @Get()
  findAll(@Query() query: any) {
    return this.regionService.findAll(query);
  }

  @ApiOperation({ summary: 'Get one Region By ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(id);
  }

  @Roles(UserRoles.ADMIN, UserRoles.SUPER_ADMIN)
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update Regions By ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(id, updateRegionDto);
  }

  @Roles(UserRoles.ADMIN)
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete Regions By ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(id);
  }
}
