import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';
import { IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @ApiProperty({ example: 'Abdulloh' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Komilov' })
  @IsString()
  @IsOptional()
  surName?: string;

  @ApiProperty({ example: '+998931416717' })
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: "Toshkent Farg'ona" })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ example: 'Assalomu alaykum, Menga master kerak' })
  @IsString()
  @IsOptional()
  message?: string;
}
