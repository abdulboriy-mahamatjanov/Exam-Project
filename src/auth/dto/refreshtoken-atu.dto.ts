import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({ example: 'Enter your resreshToken to here' })
  refreshToken: string;
}
