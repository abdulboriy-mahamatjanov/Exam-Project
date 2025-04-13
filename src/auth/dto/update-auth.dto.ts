import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAuthDto } from './create-auth.dto';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { UserRole } from 'generated/prisma';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @ApiProperty({ example: "Ro'zimuhammad Yusupov" })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '+998932512624' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'theyusupov' })
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
