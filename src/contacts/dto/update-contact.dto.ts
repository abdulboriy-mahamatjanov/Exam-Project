import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';
import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @ApiProperty({ example: 'Abdulloh' })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({ example: 'Komilov' })
  @IsString()
  @IsNotEmpty()
  surName?: string;

  @ApiProperty({ example: '+998931416717' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone?: string;

  @ApiProperty({ example: "Toshkent Farg'ona" })
  @IsString()
  @IsNotEmpty()
  address?: string;

  @ApiProperty({ example: 'Assalomu alaykum, Menga master kerak' })
  @IsString()
  @IsOptional()
  message?: string;
}
