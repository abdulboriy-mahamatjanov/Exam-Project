import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
}
