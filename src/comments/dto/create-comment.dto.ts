import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 'something' })
  @IsString()
  @IsOptional()
  message: string;

  @IsString()
  @IsOptional()
  userId: string;
}
