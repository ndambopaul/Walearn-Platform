import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FeesPayment, StudentSubscription } from './payments.schemas';
import { Model, Types } from 'mongoose';
import { FeesPaymentDto, StudentSubscriptionDto } from './payments.dtos';
import { Student } from 'src/students/students.schemas';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectModel(FeesPayment.name) private readonly feesPaymentModel: Model<FeesPayment>,
        @InjectModel(StudentSubscription.name) private readonly studentSubscriptionModel: Model<StudentSubscription>,
        @InjectModel(Student.name) private readonly studentModel: Model<Student>
    ) {}

    async getStudentSubscriptions() {
        return await this.studentSubscriptionModel.find({})
    }

    async getStudentSubscription(id: string) {
        return await this.studentSubscriptionModel.find({ student: id })
    }

    async createStudentSubscription(studentSubscriptionDto: StudentSubscriptionDto) {
        return await this.studentSubscriptionModel.create(studentSubscriptionDto)
    }

    async getFeesPayments() {
        return await this.feesPaymentModel.find({})
    }

    async getStudentFeesPayments(id: Types.ObjectId) {
        const student = await this.studentModel.findOne({ user: id })
        if(!student) return []
        return await this.feesPaymentModel.find({ student: student._id })
    }

    async createFeesPayment(feesPaymentDto: FeesPaymentDto) {
        const subscription = await this.studentSubscriptionModel.findOne({ _id: feesPaymentDto.subscription })
        console.log(subscription)
       

        if(subscription) {
            subscription.amount_paid += feesPaymentDto.amount
            subscription.balance -= feesPaymentDto.amount
            await subscription.save()
        }

        return await this.feesPaymentModel.create({
            subscription: subscription._id,
            student: subscription.student,
            payment_method: feesPaymentDto.payment_method,
            amount: feesPaymentDto.amount
        })
        
    }

}
