import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'generated/prisma';

export class RegisterDto {
  @ApiProperty({ example: 'Abdulboriy Mahamatjanov' })
  fullName: string;

  @ApiProperty({ example: '+998507525150' })
  phone: string;

  @ApiProperty({ example: 'User12345' })
  password: string;

  @ApiProperty({ enum: UserRole, example: UserRole.USER_FIZ })
  role: UserRole;

  @ApiProperty({ example: '5ebc41f6-8aaf-4e50-a48c-d61c3b53365d' })
  regionId: string;

  @ApiProperty({
    example:
      'http://res.cloudinary.com/dnle8xg73/image/upload/v1744607283/h3avie8voqhhdwc25uri.jpg',
  })
  avatar: string;
}
