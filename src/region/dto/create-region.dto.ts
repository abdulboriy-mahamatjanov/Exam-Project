import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty({ example: 'Toshkent' })
  @IsString({ message: 'Region NameUz is string ❗' })
  @IsNotEmpty({ message: 'Region NameUz is reqired ❗' })
  nameUz: string;

  @ApiProperty({ example: 'Ташкент' })
  @IsString({ message: 'Region NameRu is string ❗' })
  @IsNotEmpty({ message: 'Region NameRu is reqired ❗' })
  nameRu: string;

  @ApiProperty({ example: 'Tashkent' })
  @IsString({ message: 'Region NameEn is string ❗' })
  @IsNotEmpty({ message: 'Region NameEn is reqired ❗' })
  nameEn: string;
}
