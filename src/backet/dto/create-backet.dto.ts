import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

enum TimeUnit {
  HOUR = 'HOUR',
  DAY = 'DAY',
}

export class CreateBacketDto {
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
