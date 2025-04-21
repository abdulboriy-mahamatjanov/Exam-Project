import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfessionDto } from './create-profession.dto';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateProfessionDto extends PartialType(CreateProfessionDto) {
  @ApiProperty({ example: 'Santexnik' })
  @IsString()
  @IsOptional()
  nameUz?: string;

  @ApiProperty({ example: 'Сантехник' })
  @IsString()
  @IsOptional()
  nameRu?: string;

  @ApiProperty({ example: 'Plumber' })
  @IsString()
  @IsOptional()
  nameEn?: string;

  @ApiProperty({ example: true, default: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean = true;

  @ApiProperty({
    example: 'New Profession Image Url',
  })
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiProperty({ example: ['first-tool-uuid', 'second-tool-uuid'] })
  @IsArray()
  @IsString({ each: true })
  toolProfessions: string[];
}
