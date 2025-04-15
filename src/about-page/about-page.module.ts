import { Module } from '@nestjs/common';
import { AboutPageService } from './about-page.service';
import { AboutPageController } from './about-page.controller';

@Module({
  controllers: [AboutPageController],
  providers: [AboutPageService],
})
export class AboutPageModule {}
