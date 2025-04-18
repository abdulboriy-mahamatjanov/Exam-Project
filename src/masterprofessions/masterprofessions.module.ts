import { Module } from '@nestjs/common';
import { MasterprofessionsService } from './masterprofessions.service';
import { MasterprofessionsController } from './masterprofessions.controller';

@Module({
  controllers: [MasterprofessionsController],
  providers: [MasterprofessionsService],
})
export class MasterprofessionsModule {}
