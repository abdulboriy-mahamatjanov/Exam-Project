import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
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

  @ApiProperty({ enum: UserRole, example: UserRole.SUPER_ADMIN })
  @IsString()
  @IsNotEmpty()
  role: UserRole;

  @ApiProperty({ example: '' })
  @IsString()
  @IsNotEmpty()
  avatar: string;
}
