import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBrandDto } from './create-brand.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @ApiProperty({ example: 'Proskit' })
  @IsString()
  @IsOptional()
  nameUz?: string;

  @ApiProperty({ example: 'Проскит' })
  @IsString()
  @IsOptional()
  nameRu?: string;

  @ApiProperty({ example: 'Proskit' })
  @IsString()
  @IsOptional()
  nameEn?: string;
}
