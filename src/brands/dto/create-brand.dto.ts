import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ example: 'Fluke' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'Флуке' })
  @IsString()
  @IsNotEmpty()
  nameRu: string;

  @ApiProperty({ example: 'Fluke' })
  @IsString()
  @IsNotEmpty()
  nameEn: string;
}
