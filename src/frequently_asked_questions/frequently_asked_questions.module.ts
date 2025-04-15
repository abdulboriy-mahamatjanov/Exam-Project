import { Module } from '@nestjs/common';
import { FrequentlyAskedQuestionsService } from './frequently_asked_questions.service';
import { FrequentlyAskedQuestionsController } from './frequently_asked_questions.controller';

@Module({
  controllers: [FrequentlyAskedQuestionsController],
  providers: [FrequentlyAskedQuestionsService],
})
export class FrequentlyAskedQuestionsModule {}
