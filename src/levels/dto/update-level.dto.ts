import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLevelDto } from './create-level.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLevelDto extends PartialType(CreateLevelDto) {
  @ApiProperty({ example: 'Elektrik' })
  @IsString()
  @IsNotEmpty()
  nameUz?: string;

  @ApiProperty({ example: 'Електрик' })
  @IsString()
  @IsNotEmpty()
  nameRu?: string;

  @ApiProperty({ example: 'Electric' })
  @IsString()
  @IsNotEmpty()
  nameEn?: string;
}
