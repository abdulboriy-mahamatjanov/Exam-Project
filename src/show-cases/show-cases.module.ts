import { Module } from '@nestjs/common';
import { ShowCasesService } from './show-cases.service';
import { ShowCasesController } from './show-cases.controller';

@Module({
  controllers: [ShowCasesController],
  providers: [ShowCasesService],
})

export class ShowCasesModule {}
