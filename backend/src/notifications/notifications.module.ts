import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerMessage, CustomerMessageSchema } from './notifications.schemas';

@Module({
  imports: [MongooseModule.forFeature([
    {name: CustomerMessage.name, schema: CustomerMessageSchema}
  ])],
  providers: [NotificationsService],
  controllers: [NotificationsController],
  exports: [NotificationsService]
})
export class NotificationsModule {}
