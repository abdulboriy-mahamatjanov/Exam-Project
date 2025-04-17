import { Global, Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { CloudinaryService } from './uploads.service';

@Global()
@Module({
  providers: [CloudinaryService],
  controllers: [UploadsController],
  exports: [CloudinaryService],
})

export class UploadsModule {}
