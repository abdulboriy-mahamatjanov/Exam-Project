import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { RegionModule } from './region/region.module';
import { UploadsModule } from './uploads/uploads.module';
import { CloudinaryModule } from 'nestjs-cloudinary';
import { UserModule } from './user/user.module';
import { EskizModule } from './eskiz/eskiz.module';
import { ShowCasesModule } from './show-cases/show-cases.module';
import { PartrensModule } from './partrens/partrens.module';
import { ContactsModule } from './contacts/contacts.module';
import { FrequentlyAskedQuestionsModule } from './frequently_asked_questions/frequently_asked_questions.module';
import { AboutPageModule } from './about-page/about-page.module';
import { DataCompanyModule } from './data-company/data-company.module';
import { LevelsModule } from './levels/levels.module';
import { CapacityModule } from './capacity/capacity.module';
import { BrandsModule } from './brands/brands.module';
import { SizesModule } from './sizes/sizes.module';
import { CommentsModule } from './comments/comments.module';
import { MasterModule } from './master/master.module';
import { ProfessionsModule } from './professions/professions.module';
import { MasterprofessionsModule } from './masterprofessions/masterprofessions.module';
import { ProfessionLevelsModule } from './profession-levels/profession-levels.module';
import { ToolsModule } from './tools/tools.module';

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
    PartrensModule,
    ContactsModule,
    FrequentlyAskedQuestionsModule,
    AboutPageModule,
    DataCompanyModule,
    LevelsModule,
    CapacityModule,
    BrandsModule,
    SizesModule,
    CommentsModule,
    MasterModule,
    ProfessionsModule,
    MasterprofessionsModule,
    ProfessionLevelsModule,
    ToolsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}