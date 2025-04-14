import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: '+998507525150' })
  phone: string;

  @ApiProperty({ example: 'User12345' })
  password: string;
}