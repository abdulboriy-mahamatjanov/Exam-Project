import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSizeDto {
  @ApiProperty({ example: '100 mm' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: '100 мм' })
  @IsString()
  @IsNotEmpty()
  nameRu: string;

  @ApiProperty({ example: '100 mm' })
  @IsString()
  @IsNotEmpty()
  nameEn: string;
}
