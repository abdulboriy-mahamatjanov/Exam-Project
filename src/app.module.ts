import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { RegionModule } from './region/region.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, AuthModule, RegionModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
