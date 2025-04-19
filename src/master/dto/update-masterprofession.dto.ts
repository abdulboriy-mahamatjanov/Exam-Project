import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMasterprofessionDto } from './create-masterprofession.dto';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';
import { UUID } from 'crypto';

export class UpdateMasterprofessionDto extends PartialType(
  CreateMasterprofessionDto,
) {
  @ApiProperty({ example: '74481eb1-54ee-45bc-9f4f-351f0f0b7fff' })
  @IsString()
  professionId?: string;

  @ApiProperty({ example: '4' })
  @IsNumber()
  @IsPositive()
  minWorkingHours?: number;

  @ApiProperty({ example: '8c562674-ac4b-4892-917c-f66fbecea3ad' })
  @IsString()
  levelId?: string;

  @ApiProperty({ example: 10.000 })
  @IsNumber()
  @IsPositive()
  priceHourly?: Decimal;

  @ApiProperty({ example: 100.000 })
  @IsNumber()
  @IsPositive()
  priceDaily?: Decimal;

  @ApiProperty({ example: '5-years' })
  @IsString()
  experience?: string;

  @ApiProperty({ example: '1f71e2e2-b876-4ccb-a9f5-d93680151692' })
  @IsString()
  masterId?: string;
}
