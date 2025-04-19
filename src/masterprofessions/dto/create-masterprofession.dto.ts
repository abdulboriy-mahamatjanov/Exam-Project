import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class CreateMasterprofessionDto {
  @ApiProperty({ example: '74481eb1-54ee-45bc-9f4f-351f0f0b7fff' })
  @IsString()
  @IsNotEmpty()
  professionId: string;

  @ApiProperty({ example: 4 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  minWorkingHours: number;

  @ApiProperty({ example: '8c562674-ac4b-4892-917c-f66fbecea3ad' })
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

  @ApiProperty({ example: '5-years' })
  @IsString()
  @IsNotEmpty()
  experience: string;

  @ApiProperty({ example: '1f71e2e2-b876-4ccb-a9f5-d93680151692' })
  @IsString()
  @IsNotEmpty()
  masterId: string;
}
