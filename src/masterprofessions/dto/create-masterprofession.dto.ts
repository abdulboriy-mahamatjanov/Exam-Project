import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class CreateMasterprofessionDto {
  @ApiProperty({ example: '' })
  @IsString()
  @IsNotEmpty()
  professionId: string;

  @ApiProperty({ example: '' })
  @IsNumber()
  @IsNotEmpty()
  minWorkingHours: number;

  @IsString()
  @IsNotEmpty()
  levelId: string;
  priceHourly: Decimal;
  priceDaily: Decimal;
  experience: Decimal;
  masterId: String;
}
