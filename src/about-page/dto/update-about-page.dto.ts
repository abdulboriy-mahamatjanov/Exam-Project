import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAboutPageDto } from './create-about-page.dto';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class UpdateAboutPageDto extends PartialType(CreateAboutPageDto) {
  @ApiProperty({ example: 'abdulborimahamatjanov@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+998555060333' })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: [
      {
        Telegram: 'https://telegram.org/',
        Facebook: 'https://www.facebook.com/',
        Instagram: 'https://www.instagram.com/',
      },
    ],
  })
  @IsArray()
  @IsOptional()
  links: string[];
}
