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
  status: boolean;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dnle8xg73/image/upload/v1744974271/opy1it4zmk1bkrr6ycgf.jpg',
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;
}
