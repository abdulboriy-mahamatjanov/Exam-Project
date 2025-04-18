import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

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
  status: boolean;

  @ApiProperty({ example: 20 })
  @IsNumber()
  @IsNotEmpty()
  birthYear: number;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dnle8xg73/image/upload/v1744949382/qc1ajczrdk9ablukbqln.jpg',
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dnle8xg73/image/upload/v1744949382/qc1ajczrdk9ablukbqln.jpg',
  })
  @IsString()
  @IsNotEmpty()
  passportImage: string;

  @ApiProperty({ example: "I'm a master" })
  @IsString()
  @IsNotEmpty()
  about: string;
}
