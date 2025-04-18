import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMasterDto } from './create-master.dto';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
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
  status?: boolean;

  @ApiProperty({ example: 24 })
  @IsNumber()
  @IsOptional()
  birthYear?: number;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dnle8xg73/image/upload/v1744949382/qc1ajczrdk9ablukbqln.jpg',
  })
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dnle8xg73/image/upload/v1744949382/qc1ajczrdk9ablukbqln.jpg',
  })
  @IsString()
  @IsOptional()
  passportImage?: string;

  @ApiProperty({ example: "I'm a electrician" })
  @IsString()
  @IsOptional()
  about?: string;
}
