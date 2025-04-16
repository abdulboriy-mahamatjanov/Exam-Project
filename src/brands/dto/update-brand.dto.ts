import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBrandDto } from './create-brand.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @ApiProperty({ example: 'Proskit' })
  @IsString()
  @IsNotEmpty()
  nameUz?: string;

  @ApiProperty({ example: 'Проскит' })
  @IsString()
  @IsNotEmpty()
  nameRu?: string;

  @ApiProperty({ example: 'Proskit' })
  @IsString()
  @IsNotEmpty()
  nameEn?: string;
}
