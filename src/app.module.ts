import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { RegionModule } from './region/region.module';
import { UploadsModule } from './uploads/uploads.module';
import { CloudinaryModule } from 'nestjs-cloudinary';
import { UserModule } from './user/user.module';
import { EskizService } from './eskiz/eskiz.service';
import { EskizModule } from './eskiz/eskiz.module';
import { ShowCasesModule } from './show-cases/show-cases.module';

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
    UserModule,
    EskizModule,
    ShowCasesModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
