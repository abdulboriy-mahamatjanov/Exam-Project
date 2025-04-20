import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export enum OrderTimeUnit {
  DAY = 'DAY',
  HOUR = 'HOUR',
}

export class OrderItemDto {
  @ApiProperty({ example: 'profession-uuid' })
  @IsString()
  @IsNotEmpty()
  professionId: string;

  @ApiProperty({ example: 'tool-uuid' })
  @IsString()
  @IsNotEmpty()
  toolId: string;

  @ApiProperty({ example: 'level-uuid' })
  @IsString()
  @IsNotEmpty()
  levelId: string;

  @ApiProperty({ example: OrderTimeUnit.DAY })
  @IsNotEmpty()
  timeUnit: OrderTimeUnit.DAY;

  @ApiProperty({ example: 7 })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  workingTime: number;

  @ApiProperty({ example: 50000 })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: Decimal;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  count: number;
}
