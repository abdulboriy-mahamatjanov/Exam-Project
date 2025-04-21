import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateToolDto } from './create-tool.dto';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Decimal } from '@prisma/client/runtime/library';

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

  @ApiProperty({ example: 'brand-uuid' })
  @IsString()
  @IsOptional()
  brandId: string;

  @ApiProperty({ example: 'capaticty-uuid' })
  @IsString()
  @IsOptional()
  capacityId: string;

  @ApiProperty({ example: 'size-uuid' })
  @IsString()
  @IsOptional()
  sizeId: string;

  @ApiProperty({
    example: 'ToolImage URL',
  })
  @IsString()
  @IsOptional()
  image: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  isAvailable: boolean;
}
