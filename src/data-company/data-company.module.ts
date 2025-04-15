import { Module } from '@nestjs/common';
import { DataCompanyService } from './data-company.service';
import { DataCompanyController } from './data-company.controller';

@Module({
  controllers: [DataCompanyController],
  providers: [DataCompanyService],
})
export class DataCompanyModule {}
