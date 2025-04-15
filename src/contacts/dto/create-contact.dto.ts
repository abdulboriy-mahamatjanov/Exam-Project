import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateContactDto {
  @ApiProperty({ example: 'Nurulloh' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Mahmitjanov' })
  @IsString()
  @IsNotEmpty()
  surName: string;

  @ApiProperty({ example: '+998931416717' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'Toshkent Chilonzor' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'Assalomu alaykum, Menga master kerak' })
  @IsString()
  @IsOptional()
  message: string;
}
