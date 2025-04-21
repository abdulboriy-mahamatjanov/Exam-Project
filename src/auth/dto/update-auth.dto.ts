import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAuthDto } from './create-auth.dto';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { UserRoles } from './register-user.dto';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @ApiProperty({ example: "Ro'zimuhammad Yusupov" })
  @IsString()
  @IsNotEmpty()
  fullName?: string;

  @ApiProperty({ example: '+998932512624' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone?: string;

  @ApiProperty({ enum: UserRoles, example: UserRoles.SUPER_ADMIN })
  @IsString()
  @IsNotEmpty()
  role?: UserRoles;

  @ApiProperty({
    example:
      'http://res.cloudinary.com/dnle8xg73/image/upload/v1744607283/h3avie8voqhhdwc25uri.jpg',
  })
  @IsString()
  @IsNotEmpty()
  avatar?: string;

  @ApiProperty({ example: 'e21e4ce2-8ef4-4d98-ae75-350951c7be58' })
  @IsString()
  @IsNotEmpty()
  regionId?: string;
}
