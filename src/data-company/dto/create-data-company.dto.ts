import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDataCompanyDto {
  @ApiProperty({ example: '305483927' })
  @IsString()
  @IsNotEmpty()
  INN: string;

  @ApiProperty({ example: '01162' })
  @IsString()
  @IsNotEmpty()
  MFO: string;

  @ApiProperty({ example: '40817810010012345678' })
  @IsString()
  @IsNotEmpty()
  R_or_C: string;

  @ApiProperty({ example: '01017' })
  @IsString()
  @IsNotEmpty()
  bankCode: string;

  @ApiProperty({ example: '62010' })
  @IsString()
  @IsNotEmpty()
  Oked: string;

  @ApiProperty({
    example:
      'Toshkent shahri, Yakkasaroy tumani, Shota Rustaveli ko‘chasi, 12-uy',
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}