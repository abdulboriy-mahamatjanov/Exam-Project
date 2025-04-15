import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateShowCaseDto } from './create-show-case.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateShowCaseDto extends PartialType(CreateShowCaseDto) {
  @ApiProperty({ example: 'Tajribali elektr ustasi' })
  @IsString()
  @IsNotEmpty()
  nameUz?: string;

  @ApiProperty({ example: 'Опытный электрик' })
  @IsString()
  @IsNotEmpty()
  nameRu?: string;

  @ApiProperty({ example: 'Experienced Electrician' })
  @IsString()
  @IsNotEmpty()
  nameEn?: string;

  @ApiProperty({
    example:
      'Hovlingiz, uy yoki ofisingiz uchun elektr xizmatlari. Tez, ishonchli va arzon!',
  })
  @IsString()
  @IsNotEmpty()
  descriptionUz?: string;

  @ApiProperty({
    example:
      'Электромонтажные работы для дома и офиса. Быстро, надежно и недорого!',
  })
  @IsString()
  @IsNotEmpty()
  descriptionRu?: string;

  @ApiProperty({
    example:
      'Electrical services for your home and office. Fast, reliable, and affordable!',
  })
  @IsString()
  @IsNotEmpty()
  descriptionEn?: string;

  @ApiProperty({
    example: 'https://example.com/uploads/showcases/electrician-service.jpg',
  })
  @IsString()
  @IsNotEmpty()
  image?: string;

  @ApiProperty({ example: 'https://example.com/ustalar/elektrik' })
  @IsString()
  @IsNotEmpty()
  link?: string;
}
