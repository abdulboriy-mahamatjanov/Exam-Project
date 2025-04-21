import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { UserRoles } from './register-user.dto';

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
    enum: UserRoles,
    example: UserRoles.SUPER_ADMIN,
  })
  @IsString()
  @IsNotEmpty()
  @IsIn([UserRoles.SUPER_ADMIN, UserRoles.VIEWER_ADMIN, UserRoles.ADMIN], {
    message: `You are not allowed to assign this role ❗`,
  })
  role: UserRoles;

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
