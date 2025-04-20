import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { UserRole } from 'generated/prisma';
import { CreateDataCompanyDto } from './datacompany-auth.dto';

export enum UserRoles {
  ADMIN = 'ADMIN',
  VIEWER_ADMIN = 'VIEWER_ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  USER_FIZ = 'USER_FIZ',
  USER_YUR = 'USER_YUR',
}

export class RegisterDto {
  @ApiProperty({ example: 'Abdulboriy Mahamatjanov' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '+998507525150' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'User12345' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ enum: UserRole, example: UserRole.USER_FIZ })
  @IsString()
  @IsOptional()
  @IsIn([UserRole.USER_YUR, UserRole.USER_FIZ], {
    message: `You are not allowed to assign this role ❗`,
  })
  role: UserRoles;

  @ApiProperty({ example: 'region-uuid' })
  @IsString()
  @IsNotEmpty()
  regionId: string;

  @ApiProperty({
    example: 'UserAvatar URL',
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;

  @ApiPropertyOptional({ type: [CreateDataCompanyDto] })
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => CreateDataCompanyDto)
  dataCompany?: CreateDataCompanyDto[];
}
