import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMasterprofessionDto } from './create-masterprofession.dto';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class UpdateMasterprofessionDto extends PartialType(
  CreateMasterprofessionDto,
) {
  @ApiProperty({ example: 'profession-uuid' })
  @IsString()
  @IsOptional()
  professionId?: string;

  @ApiProperty({ example: 4 })
  @IsNumber()
  @IsPositive()
  @Min(1)
  @IsOptional()
  minWorkingHours?: number;

  @ApiProperty({ example: 'level-uuid' })
  @IsString()
  @IsOptional()
  levelId?: string;

  @ApiProperty({ example: 17000 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  priceHourly?: Decimal;

  @ApiProperty({ example: 50000 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  priceDaily?: Decimal;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  experience?: number;
}
