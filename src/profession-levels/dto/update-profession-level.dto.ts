import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfessionLevelDto } from './create-profession-level.dto';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { Decimal } from 'generated/prisma/runtime/library';

export class UpdateProfessionLevelDto extends PartialType(
  CreateProfessionLevelDto,
) {
  @ApiProperty({ example: 'new Profession-uuid' })
  @IsString()
  @IsOptional()
  professionId?: string;

  @ApiProperty({ example: 'new Level-uuid' })
  @IsString()
  @IsOptional()
  levelId?: string;

  @ApiProperty({ example: 6 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  minWorkingHours?: number;

  @ApiProperty({ example: 40 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  priceHourly?: Decimal;

  @ApiProperty({ example: 400 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  priceDaily?: Decimal;
}
