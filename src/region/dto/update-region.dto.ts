import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRegionDto } from './create-region.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRegionDto extends PartialType(CreateRegionDto) {
  @ApiProperty({ example: "Farg'ona" })
  @IsString({ message: 'Region NameUz is string ❗' })
  @IsOptional()
  nameUz?: string;

  @ApiProperty({ example: 'Фарғона' })
  @IsString({ message: 'Region NameRu is string ❗' })
  @IsOptional()
  nameRu?: string;

  @ApiProperty({ example: 'Fergana' })
  @IsString({ message: 'Region NameEn is string ❗' })
  @IsOptional()
  nameEn?: string;
}
