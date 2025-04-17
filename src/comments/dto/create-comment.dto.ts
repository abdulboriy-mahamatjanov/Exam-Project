import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 'something' })
  @IsString()
  @IsOptional()
  message: string;

  @ApiProperty({ example: '' })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
