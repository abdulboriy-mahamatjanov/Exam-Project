import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class CreateProfessionLevelDto {
  @ApiProperty({ example: '74481eb1-54ee-45bc-9f4f-351f0f0b7fff' })
  @IsString()
  @IsNotEmpty()
  professionId: string;

  @ApiProperty({ example: '8c562674-ac4b-4892-917c-f66fbecea3ad' })
  @IsString()
  @IsNotEmpty()
  levelId: string;

  @ApiProperty({ example: 6 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  minWorkingHours: number;

  @ApiProperty({ example: 40 })
  @IsDecimal()
  @IsNotEmpty()
  @IsPositive()
  priceHourly: Decimal;

  @ApiProperty({ example: 400 })
  @IsDecimal()
  @IsNotEmpty()
  @IsPositive()
  priceDaily: Decimal;
}
