import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class CreateToolDto {
  @ApiProperty({ example: 'Drill' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'Дрель' })
  @IsString()
  @IsNotEmpty()
  nameRu: string;

  @ApiProperty({ example: 'Drill' })
  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @ApiProperty({ example: 'Bu quvvatli matkap asbobidir.' })
  @IsString()
  @IsNotEmpty()
  descriptionUz: string;

  @ApiProperty({ example: 'Это мощный инструмент для сверления.' })
  @IsString()
  @IsNotEmpty()
  descriptionRu: string;

  @ApiProperty({ example: 'This is a powerful drilling tool.' })
  @IsString()
  @IsNotEmpty()
  descriptionEn: string;

  @ApiProperty({ example: 500000 })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: Decimal;

  @ApiProperty({ example: 20 })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ example: '53a484dc-4963-4730-b418-604af5344790' })
  @IsString()
  @IsNotEmpty()
  brandId: string;

  @ApiProperty({ example: '3eb93f37-dbbe-499f-b813-d5cc68b040db' })
  @IsString()
  @IsNotEmpty()
  capacityId: string;

  @ApiProperty({ example: '5353e862-d3ea-484f-bb51-6d75cd0a66fb' })
  @IsString()
  @IsNotEmpty()
  sizeId: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dnle8xg73/image/upload/v1745077793/puh7wibpidargim0qmex.jpg',
  })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsNotEmpty()
  isAvailable: boolean;
}

export function generateToolCode(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetters = Array(2)
    .fill(null)
    .map(() => letters.charAt(Math.floor(Math.random() * letters.length)))
    .join('');

  const randomNumbers = Math.floor(100000 + Math.random() * 900000);

  return `${randomLetters}-${randomNumbers}`;
}
