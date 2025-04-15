import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePartrenDto } from './create-partren.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePartrenDto extends PartialType(CreatePartrenDto) {
  @ApiProperty({ example: 'Kfc' })
  @IsString()
  @IsNotEmpty()
  nameUz?: string;

  @ApiProperty({ example: 'Кфc' })
  @IsString()
  @IsNotEmpty()
  nameRu?: string;

  @ApiProperty({ example: 'Kfc' })
  @IsString()
  @IsNotEmpty()
  nameEn?: string;

  @ApiProperty({
    example:
      'http://res.cloudinary.com/dnle8xg73/image/upload/v1744694722/keoa3tci2pguempf33fl.png',
  })
  @IsString()
  @IsNotEmpty()
  images?: string;
}
