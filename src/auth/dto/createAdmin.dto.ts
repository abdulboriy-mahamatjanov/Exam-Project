import { IsIn, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { UserRoles } from './register-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '+998931416717' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'root' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: UserRoles.SUPER_ADMIN })
  @IsString()
  @IsNotEmpty()
  @IsIn([UserRoles.SUPER_ADMIN])
  role: UserRoles.SUPER_ADMIN;
}
