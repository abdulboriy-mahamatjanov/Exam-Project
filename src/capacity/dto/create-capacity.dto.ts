import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCapacityDto {
  @ApiProperty({ example: '500 Volt' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: '500 Волть' })
  @IsString()
  @IsNotEmpty()
  nameRu: string;

  @ApiProperty({ example: '500 W' })
  @IsString()
  @IsNotEmpty()
  nameEn: string;
}
