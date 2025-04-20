import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateMasterprofessionDto } from './create-masterprofession.dto';

export class CreateMasterDto {
  @ApiProperty({ example: 'Benjamin Franklin' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '+998772772799' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: true, default: true })
  @IsBoolean()
  @IsOptional()
  status: boolean = true;

  @ApiProperty({ example: 20 })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  birthYear: number;

  @ApiProperty({
    example: 'Image url',
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({
    example: 'PassportImage url',
  })
  @IsString()
  @IsNotEmpty()
  passportImage: string;

  @ApiProperty({ example: "I'm a master" })
  @IsString()
  @IsNotEmpty()
  about: string;

  @ApiPropertyOptional({ type: [CreateMasterprofessionDto] })
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateMasterprofessionDto)
  masterProfessions: CreateMasterprofessionDto[];
}
