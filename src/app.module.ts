import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { RegionModule } from './region/region.module';
import { UploadsModule } from './uploads/uploads.module';
import { CloudinaryModule } from 'nestjs-cloudinary';
import { EskizModule } from './eskiz/eskiz.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,
    RegionModule,
    UploadsModule,
    CloudinaryModule.forRootAsync({
      imports: [],
      useFactory: () => ({
        isGlobal: true,
        cloud_name: process.env.CLOUD_ANME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      }),
    }),
    EskizModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
