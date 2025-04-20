import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class CreateProfessionLevelDto {
  @ApiProperty({ example: 'profession-uuid' })
  @IsString()
  @IsNotEmpty()
  professionId: string;

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
