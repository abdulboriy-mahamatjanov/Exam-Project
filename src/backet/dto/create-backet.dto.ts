import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

enum TimeUnit {
  HOUR = 'HOUR',
  DAY = 'DAY',
}

export class CreateBacketDto {
  @ApiProperty({ example: 'profession-uuid' })
  @IsString()
  @IsOptional()
  professionId: string;

  @ApiProperty({ example: 'tool-uuid' })
  @IsString()
  @IsOptional()
  toolId: string;

  @ApiProperty({ example: 'level-uuid' })
  @IsString()
  @IsOptional()
  levelId: string;

  @ApiProperty({ example: TimeUnit.DAY })
  @IsNotEmpty()
  timeUnit: TimeUnit;

  @ApiProperty({ example: 7 })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  workingTime: number;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  count: number;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @IsPositive()
  totalPrice: Decimal;
}
