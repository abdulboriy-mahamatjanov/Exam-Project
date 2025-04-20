import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLevelDto } from './create-level.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateLevelDto extends PartialType(CreateLevelDto) {
  @ApiProperty({ example: 'Boshlovchi' })
  @IsString()
  @IsOptional()
  nameUz?: string;

  @ApiProperty({ example: 'Начинающий' })
  @IsString()
  @IsOptional()
  nameRu?: string;

  @ApiProperty({ example: 'Beginner' })
  @IsString()
  @IsOptional()
  nameEn?: string;
}
