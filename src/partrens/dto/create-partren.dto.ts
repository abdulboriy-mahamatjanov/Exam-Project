import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePartrenDto {
  @ApiProperty({ example: 'Sber bank' })
  @IsString()
  @IsNotEmpty({ message: 'nameUz shoud not be empty ❗' })
  nameUz: string;

  @ApiProperty({ example: 'Сбер банк' })
  @IsString()
  @IsNotEmpty()
  nameRu: string;

  @ApiProperty({ example: 'Sber bank' })
  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @ApiProperty({
    example:
      'http://res.cloudinary.com/dnle8xg73/image/upload/v1744694722/keoa3tci2pguempf33fl.png',
  })
  @IsString()
  @IsNotEmpty()
  images: string;
}
