import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateAuthDto } from 'src/auth/dto/update-auth.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/jwt_token.guard';
import { Roles } from 'src/guards/role.decorator';
import { UserRoles } from 'src/auth/dto/register-user.dto';
import { RoleGuard } from 'src/guards/rolePolice.guard';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get all Users' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({
    name: 'order',
    required: false,
    type: String,
    enum: ['asc', 'desc'],
  })
  @ApiQuery({ name: 'search', required: false, type: String })
  // @Roles(UserRoles.ADMIN)
  // @UseGuards(RoleGuard)
  // @UseGuards(AuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.userService.findAll(query);
  }

  @ApiOperation({ summary: 'Get one User By ID' })
  @Roles(UserRoles.ADMIN)
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  // @ApiOperation({ summary: 'Update User By ID' })
  // @Roles(UserRoles.ADMIN)
  // @UseGuards(RoleGuard)
  // @UseGuards(AuthGuard)
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateAuthDto) {
  //   return this.userService.update(id, updateUserDto);
  // }

  // @ApiOperation({ summary: 'Delete User By ID' })
  // @Roles(UserRoles.ADMIN)
  // @UseGuards(RoleGuard)
  // @UseGuards(AuthGuard)
//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.userService.remove(id);
//   }
}