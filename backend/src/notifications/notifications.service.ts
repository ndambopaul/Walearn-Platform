import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerMessage } from './notifications.schemas';
import { Model } from 'mongoose';
import { CustomerMessageDto } from './notifications.dtos';

@Injectable()
export class NotificationsService {
    constructor(
        @InjectModel(CustomerMessage.name) private readonly customerMessageModel: Model<CustomerMessage>
    ) {}

    async getCustomerMessages() {
        return this.customerMessageModel.find({})
    }

    async recordCustomerMessage(customerMessageDto: CustomerMessageDto) {
        return this.customerMessageModel.create(customerMessageDto)
    }
}
