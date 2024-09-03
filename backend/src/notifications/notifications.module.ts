import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerMessage, CustomerMessageSchema, NewsLetter, NewsLetterSchema } from './notifications.schemas';

@Module({
  imports: [MongooseModule.forFeature([
    {name: CustomerMessage.name, schema: CustomerMessageSchema},
    {name: NewsLetter.name, schema: NewsLetterSchema},
  ])],
  providers: [NotificationsService],
  controllers: [NotificationsController],
  exports: [NotificationsService]
})
export class NotificationsModule {}
