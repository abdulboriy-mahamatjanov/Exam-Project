import { ApiProperty } from '@nestjs/swagger';

export class CreateFrequentlyAskedQuestionDto {
  @ApiProperty({
    example: 'Qanday qilib zakaz, qilsa yoki sotib olsa boladi, materialni',
  })
  question: string;

  @ApiProperty({ example: 'Sotib yoki zakaz berish uchun bizga muroja qiling' })
  answer: string;
}
