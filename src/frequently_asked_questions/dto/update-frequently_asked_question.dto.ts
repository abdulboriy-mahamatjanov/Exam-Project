import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFrequentlyAskedQuestionDto } from './create-frequently_asked_question.dto';

export class UpdateFrequentlyAskedQuestionDto extends PartialType(
  CreateFrequentlyAskedQuestionDto,
) {
  @ApiProperty({
    example:
      "Mahsulotlar korxonasi bilan qanday tanishib chiqsam yoki uchrashib olsam bo'ladi",
  })
  question?: string;

  @ApiProperty({
    example:
      'Mahsulotlar korxonasi bilan tanishish uchun, bizga murojat qiling',
  })
  answer?: string;
}
