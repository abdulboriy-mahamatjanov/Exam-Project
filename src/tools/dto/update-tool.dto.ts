import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateToolDto } from './create-tool.dto';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class UpdateToolDto extends PartialType(CreateToolDto) {
  @ApiProperty({ example: 'Drill' })
  @IsString()
  @IsOptional()
  nameUz: string;

  @ApiProperty({ example: 'Дрель' })
  @IsString()
  @IsOptional()
  nameRu: string;

  @ApiProperty({ example: 'Drill' })
  @IsString()
  @IsOptional()
  nameEn: string;

  @ApiProperty({ example: 'Bu quvvatli matkap asbobidir.' })
  @IsString()
  @IsOptional()
  descriptionUz: string;

  @ApiProperty({ example: 'Это мощный инструмент для сверления.' })
  @IsString()
  @IsOptional()
  descriptionRu: string;

  @ApiProperty({ example: 'This is a powerful drilling tool.' })
  @IsString()
  @IsOptional()
  descriptionEn: string;

  @ApiProperty({ example: 500000 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: Decimal;

  @ApiProperty({ example: 20 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  quantity: number;

  @ApiProperty({ example: '53a484dc-4963-4730-b418-604af5344790' })
  @IsString()
  @IsOptional()
  brandId: string;

  @ApiProperty({ example: '3eb93f37-dbbe-499f-b813-d5cc68b040db' })
  @IsString()
  @IsOptional()
  capacityId: string;

  @ApiProperty({ example: '5353e862-d3ea-484f-bb51-6d75cd0a66fb' })
  @IsString()
  @IsOptional()
  sizeId: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dnle8xg73/image/upload/v1745077793/puh7wibpidargim0qmex.jpg',
  })
  @IsString()
  @IsOptional()
  image: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  isAvailable: boolean;
}
