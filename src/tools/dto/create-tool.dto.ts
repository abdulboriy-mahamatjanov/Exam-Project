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

  @ApiProperty({ example: 'brand-uuid' })
  @IsString()
  @IsNotEmpty()
  brandId: string;

  @ApiProperty({ example: 'capacity-uuid' })
  @IsString()
  @IsNotEmpty()
  capacityId: string;

  @ApiProperty({ example: 'size-uuid' })
  @IsString()
  @IsNotEmpty()
  sizeId: string;

  @ApiProperty({
    example: 'ToolImage URL',
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
