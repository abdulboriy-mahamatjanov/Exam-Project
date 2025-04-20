import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class CreateMasterprofessionDto {
  @ApiProperty({ example: 'professon-uuid' })
  @IsString()
  @IsNotEmpty()
  professionId: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @Min(1)
  minWorkingHours: number;

  @ApiProperty({ example: 'level-uuid' })
  @IsString()
  @IsNotEmpty()
  levelId: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  priceHourly: Decimal;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  priceDaily: Decimal;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  experience: number;
}
