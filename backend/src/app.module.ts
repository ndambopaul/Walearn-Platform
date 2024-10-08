import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsModule } from './notifications/notifications.module';
import { CoursesModule } from './courses/courses.module';
import { TeamModule } from './team/team.module';
import { StudentsModule } from './students/students.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow("MONGODB_URI")
      }),
      inject: [ConfigService],
    }),
    UsersModule, 
    AuthModule, NotificationsModule, CoursesModule, TeamModule, StudentsModule, PaymentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
