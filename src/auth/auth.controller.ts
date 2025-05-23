import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { RefreshTokenDto } from './dto/refreshtoken-atu.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/jwt_token.guard';
import { CreateAdminDto } from './dto/createAdmin.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/createAdmin')
  createSuperAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.createAdmin(createAdminDto);
  }

  @ApiOperation({
    summary: 'Register a new Users with PhoneNumber, FullName ...',
  })
  @Post('/register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @ApiOperation({ summary: 'Verify OTP with PhoneNumber' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        phone: { type: 'string', example: '+998507525150' },
        otp: { type: 'string', example: '123456' },
      },
    },
  })
  @Post('/verify-otp')
  verifyOTP(@Body() body: { phone: string; otp: string }) {
    return this.authService.verifyOTP(body.phone, body.otp);
  }

  @ApiOperation({ summary: 'Resend OTP to PhoneNumber' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        phone: { type: 'string', example: '+998507525150' },
      },
    },
  })
  @Post('/resend-otp')
  resendOTP(@Body() body: { phone: string }) {
    return this.authService.resendOTP(body.phone);
  }

  @ApiOperation({ summary: 'Login with PhoneNumber and Password' })
  @Post('/login')
  login(@Body() loginDto: LoginDto, @Req() req: Request) {
    return this.authService.login(loginDto, req);
  }

  @ApiOperation({ summary: 'Get all Sessions' })
  @UseGuards(AuthGuard)
  @Get('/sessions')
  sessions(@Req() req: Request) {
    return this.authService.sessions(req);
  }

  @ApiOperation({ summary: 'Delete sessions' })
  @UseGuards(AuthGuard)
  @Delete('/delete-sessions/:id')
  deleteSessions(@Req() req: Request, @Param('id') id: string) {
    return this.authService.deleteSessions(req, id);
  }

  @ApiOperation({ summary: 'Get My Data' })
  @UseGuards(AuthGuard)
  @Get('/myPage')
  myPage(@Req() req: Request) {
    return this.authService.myPage(req);
  }

  @ApiOperation({ summary: 'Get a new AccessToken with RefreshToken' })
  @Post('/refresh-token')
  refreshToken(@Body() refreshToken: RefreshTokenDto, @Req() request: Request) {
    return this.authService.refreshToken(request);
  }

  @ApiOperation({ summary: 'Get a new Password with PhoneNumber' })
  @Post('/reset-password')
  resetPassword() {
    return this.authService.resetPassword();
  }
}
