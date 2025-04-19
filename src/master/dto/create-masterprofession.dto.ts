import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { UUID } from 'crypto';
import { Decimal } from 'generated/prisma/runtime/library';

export class CreateMasterprofessionDto {
  @ApiProperty({ example: 'uuid' })
  @IsUUID()
  @IsNotEmpty()
  professionId: string;

  @ApiProperty({ example: 4 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @Min(1)
  minWorkingHours: number;

  @ApiProperty({ example: 'uuid' })
  @IsUUID()
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

  @ApiProperty({ example: '5-years' })
  @IsString()
  @IsNotEmpty()
  experience: string;

  @ApiProperty({ example: 'uuid' })
  @IsString()
  @IsOptional()
  masterId?: string;
}
