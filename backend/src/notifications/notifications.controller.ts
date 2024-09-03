import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CustomerMessageDto, NewsLetterSubscriberDto } from './notifications.dtos';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

    @Get("messages")
    async getCustomerMessages() {
        return this.notificationsService.getCustomerMessages()
    }

    @Post("messages")
    async recordCustomerMessage(@Body(ValidationPipe) customerMessageDto: CustomerMessageDto) {
        return this.notificationsService.recordCustomerMessage(customerMessageDto)
    }

    @Get("newsletters")
    async getNewsLettersSubscribers() {
        return this.notificationsService.getNewsLettersSubscribers()
    }

    @Post("newsletters")
    async createNewsLettersSubscribers(@Body(ValidationPipe) newsLetterDto: NewsLetterSubscriberDto) {
        return this.notificationsService.createNewsLettersSubscribers(newsLetterDto)
    }
}
