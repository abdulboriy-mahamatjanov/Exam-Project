import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Max,
} from 'class-validator';
import { UserRole } from 'generated/prisma';

export class CreateAuthDto {
  @ApiProperty({ example: 'Alisher Sharipov' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '+998953901313' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'coder2o2' })
  @IsString()
  @IsNotEmpty()
  @Max(8)
  password: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.SUPER_ADMIN,
  })
  @IsString()
  @IsNotEmpty()
  @IsIn([UserRole.SUPER_ADMIN, UserRole.VIEWER_ADMIN], {
    message: `You are not allowed to assign this role ❗`,
  })
  role: UserRole;

  @ApiProperty({
    example: 'Avatar URL',
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({ example: 'region-uuid' })
  @IsString()
  @IsNotEmpty()
  regionId: string;
}
