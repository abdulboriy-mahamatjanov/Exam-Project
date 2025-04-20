import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateMasterDto } from './create-master.dto';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateMasterDto extends PartialType(CreateMasterDto) {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsOptional()
  fullName?: string;

  @ApiProperty({ example: '+998772772790' })
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: true, default: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean = true;

  @ApiProperty({ example: 24 })
  @IsNumber()
  @IsOptional()
  @IsPositive()
  birthYear?: number;

  @ApiProperty({
    example: 'New Avatar Url',
  })
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiProperty({
    example: 'New PassportImage Url',
  })
  @IsString()
  @IsOptional()
  passportImage?: string;

  @ApiProperty({ example: "I'm Plumber" })
  @IsString()
  @IsOptional()
  about?: string;
}