import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login-user.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Create a new Super_Admin with FullName, phoneNumer ...',
  })
  @Post('/create-super_admin')
  createSuperAdmin(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.createSuperAdmin(createAuthDto);
  }

  @ApiOperation({
    summary: 'Register a new Users with PhoneNumber, FullName ...',
  })
  @Post('/register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
