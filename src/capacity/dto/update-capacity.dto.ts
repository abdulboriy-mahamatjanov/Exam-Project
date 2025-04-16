import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCapacityDto } from './create-capacity.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCapacityDto extends PartialType(CreateCapacityDto) {
  @ApiProperty({ example: '500 Volt' })
  @IsString()
  @IsNotEmpty()
  nameUz?: string;

  @ApiProperty({ example: '500 Волть' })
  @IsString()
  @IsNotEmpty()
  nameRu?: string;

  @ApiProperty({ example: '500 W' })
  @IsString()
  @IsNotEmpty()
  nameEn?: string;
}
