import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfessionDto } from './create-profession.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateProfessionDto extends PartialType(CreateProfessionDto) {
  @ApiProperty({ example: 'Santexnik' })
  @IsString()
  @IsNotEmpty()
  nameUz?: string;

  @ApiProperty({ example: 'Сантехник' })
  @IsString()
  @IsNotEmpty()
  nameRu?: string;

  @ApiProperty({ example: 'Plumber' })
  @IsString()
  @IsNotEmpty()
  nameEn?: string;

  @ApiProperty({ example: true, default: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dnle8xg73/image/upload/v1744974271/opy1it4zmk1bkrr6ycgf.jpg',
  })
  @IsString()
  @IsNotEmpty()
  avatar?: string;
}
