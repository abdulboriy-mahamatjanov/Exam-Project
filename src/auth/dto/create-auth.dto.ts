import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
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
  @IsIn([UserRole.SUPER_ADMIN], {
    message: `You are not allowed to assign this role ❗`,
  })
  role: UserRole;

  @ApiProperty({
    example:
      'http://res.cloudinary.com/dnle8xg73/image/upload/v1744607283/h3avie8voqhhdwc25uri.jpg',
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({ example: '0e11dcc2-27eb-4227-be0b-0030c6732832' })
  @IsString()
  @IsNotEmpty()
  regionId: string;
}
