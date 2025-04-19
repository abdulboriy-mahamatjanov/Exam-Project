import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfessionLevelDto } from './create-profession-level.dto';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class UpdateProfessionLevelDto extends PartialType(
  CreateProfessionLevelDto,
) {
  @ApiProperty({ example: '74481eb1-54ee-45bc-9f4f-351f0f0b7fff' })
  @IsString()
  professionId?: string;

  @ApiProperty({ example: '8c562674-ac4b-4892-917c-f66fbecea3ad' })
  @IsString()
  levelId?: string;

  @ApiProperty({ example: 6 })
  @IsNumber()
  @IsPositive()
  minWorkingHours?: number;

  @ApiProperty({ example: 40 })
  @IsDecimal()
  @IsPositive()
  priceHourly?: Decimal;

  @ApiProperty({ example: 400 })
  @IsDecimal()
  @IsPositive()
  priceDaily?: Decimal;
}
