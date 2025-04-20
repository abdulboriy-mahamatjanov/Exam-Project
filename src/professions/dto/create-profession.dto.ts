import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateProfessionDto {
  @ApiProperty({ example: 'Elektrik' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'Електрик' })
  @IsString()
  @IsNotEmpty()
  nameRu: string;

  @ApiProperty({ example: 'Electrician' })
  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @ApiProperty({ example: true, default: true })
  @IsBoolean()
  @IsOptional()
  status: boolean = true;

  @ApiProperty({
    example: 'Profession Image Url',
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({ example: ['first-tool-uuid', 'second-tool-uuid'] })
  @IsArray()
  @IsString({ each: true })
  toolProfessions: string[];
}
