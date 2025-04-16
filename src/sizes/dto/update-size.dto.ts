import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSizeDto } from './create-size.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSizeDto extends PartialType(CreateSizeDto) {
  @ApiProperty({ example: '200 mm' })
  @IsString()
  @IsNotEmpty()
  nameUz?: string;

  @ApiProperty({ example: '200 мм' })
  @IsString()
  @IsNotEmpty()
  nameRu?: string;

  @ApiProperty({ example: '200 mm' })
  @IsString()
  @IsNotEmpty()
  nameEn?: string;
}
