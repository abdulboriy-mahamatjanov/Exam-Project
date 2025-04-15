import { Module } from '@nestjs/common';
import { PartrensService } from './partrens.service';
import { PartrensController } from './partrens.controller';

@Module({
  controllers: [PartrensController],
  providers: [PartrensService],
})
export class PartrensModule {}
