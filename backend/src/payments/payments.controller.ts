import { Body, Controller, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { FeesPaymentDto, StudentSubscriptionDto } from './payments.dtos';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth-guard';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from 'src/users/users.schemas';

@Controller('payments')
export class PaymentsController {
    constructor(
        private readonly paymentsService: PaymentsService
    ) {}

    @Get("subscriptions")
    async getStudentSubscriptions() {
        return this.paymentsService.getStudentSubscriptions()
    }

    @Get("student-subscriptions/:id")
    async getStudentSubscription(@Param("id") id: string) {
        return this.paymentsService.getStudentSubscription(id)
    }

    @Post("subscriptions")
    async createStudentSubscription(@Body(ValidationPipe) studentSubscriptionDto: StudentSubscriptionDto) {
        return this.paymentsService.createStudentSubscription(studentSubscriptionDto)
    }

    @Post("fees-payments")
    async createFeesPayment(@Body(ValidationPipe) feesPaymentDto: FeesPaymentDto) {
        return this.paymentsService.createFeesPayment(feesPaymentDto)
    }

    @Get("fees-payments")
    async getFeesPayments() {
        return this.paymentsService.getFeesPayments()
    }

    @Get("student-fees-payments")
    @UseGuards(JwtAuthGuard)
    async getStudentFeesPayments(@CurrentUser() user: User) {
        return this.paymentsService.getStudentFeesPayments(user._id)
    }
}
