import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FeesPayment, FeesPaymentSchema, StudentSubscription, StudentSubscriptionSchema } from './payments.schemas';
import { StudentsModule } from 'src/students/students.module';
import { Student, StudentSchema } from 'src/students/students.schemas';

@Module({
  imports: [MongooseModule.forFeature([
    {name: FeesPayment.name, schema: FeesPaymentSchema},
    {name: StudentSubscription.name, schema: StudentSubscriptionSchema},
    {name: Student.name, schema: StudentSchema}
  ]), StudentsModule],
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsService],
})
export class PaymentsModule {}
