import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CustomerMessageDto } from './notifications.dtos';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

    @Get()
    async getCustomerMessages() {
        return this.notificationsService.getCustomerMessages()
    }

    @Post()
    async recordCustomerMessage(@Body(ValidationPipe) customerMessageDto: CustomerMessageDto) {
        return this.notificationsService.recordCustomerMessage(customerMessageDto)
    }
}
