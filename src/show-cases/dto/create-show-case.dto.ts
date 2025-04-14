import { ApiProperty } from '@nestjs/swagger';

export class CreateShowCaseDto {
  @ApiProperty({ example: '' })
  nameUz: string;

  @ApiProperty({ example: '' })
  nameRu: string;

  @ApiProperty({ example: '' })
  nameEn: string;

  @ApiProperty({ example: '' })
  descriptionUz: string;

  @ApiProperty({ example: '' })
  descriptionRu: string;

  @ApiProperty({ example: '' })
  descriptionEn: string;

  @ApiProperty({ example: '' })
  image: string;

  @ApiProperty({ example: '' })
  link: string;
}
