import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerMessage, NewsLetter } from './notifications.schemas';
import { Model } from 'mongoose';
import { CustomerMessageDto, NewsLetterSubscriberDto } from './notifications.dtos';

@Injectable()
export class NotificationsService {
    constructor(
        @InjectModel(CustomerMessage.name) private readonly customerMessageModel: Model<CustomerMessage>,
        @InjectModel(NewsLetter.name) private readonly newsLetterModel: Model<NewsLetter>
    ) {}

    async getCustomerMessages() {
        return this.customerMessageModel.find({})
    }

    async recordCustomerMessage(customerMessageDto: CustomerMessageDto) {
        return this.customerMessageModel.create(customerMessageDto)
    }

    // NewsLetter Subscriptions
    async getNewsLettersSubscribers() {
        return await this.newsLetterModel.find({})
    }

    async getOneNewsLetterSubscriber(email: string) {
        return await this.newsLetterModel.findOne({ email: email })
    }

    async createNewsLettersSubscribers(newsLetterDto: NewsLetterSubscriberDto) {
        return await this.newsLetterModel.create(newsLetterDto)
    }
}
