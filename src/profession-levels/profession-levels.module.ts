import { Module } from '@nestjs/common';
import { ProfessionLevelsService } from './profession-levels.service';
import { ProfessionLevelsController } from './profession-levels.controller';

@Module({
  controllers: [ProfessionLevelsController],
  providers: [ProfessionLevelsService],
})
export class ProfessionLevelsModule {}
