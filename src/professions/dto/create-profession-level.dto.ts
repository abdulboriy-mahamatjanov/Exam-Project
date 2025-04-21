import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateProfessionLevelDto {
  @ApiProperty({ example: 'level-uuid' })
  @IsString()
  @IsNotEmpty()
  levelId: string;

  @ApiProperty({ example: 6 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @Min(1)
  minWorkingHours: number;

  @ApiProperty({ example: 40 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  priceHourly: Decimal;

  @ApiProperty({ example: 400 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  priceDaily: Decimal;
}
