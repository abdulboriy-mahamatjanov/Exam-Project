import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCapacityDto } from './create-capacity.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCapacityDto extends PartialType(CreateCapacityDto) {
  @ApiProperty({ example: '500 Volt' })
  @IsString()
  @IsOptional()
  nameUz?: string;

  @ApiProperty({ example: '500 Волть' })
  @IsString()
  @IsOptional()
  nameRu?: string;

  @ApiProperty({ example: '500 W' })
  @IsString()
  @IsOptional()
  nameEn?: string;
}
