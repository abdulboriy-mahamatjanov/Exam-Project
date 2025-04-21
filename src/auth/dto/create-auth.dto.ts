import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
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
  password: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.SUPER_ADMIN,
  })
  @IsString()
  @IsNotEmpty()
  @IsIn([UserRole.SUPER_ADMIN, UserRole.VIEWER_ADMIN, UserRole.ADMIN], {
    message: `You are not allowed to assign this role ❗`,
  })
  role: UserRole;

  @ApiProperty({
    example: 'avatar url',
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({ example: 'region_id' })
  @IsString()
  @IsOptional()
  regionId: string;
}
