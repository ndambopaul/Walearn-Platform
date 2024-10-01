import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { SchemaTypes, Types } from "mongoose";
import { Student } from "src/students/students.schemas";


@Schema({ timestamps: true })
export class StudentSubscription {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Student" })
    student: Student;

    @Prop({ required: true })
    total_amount: number;

    @Prop({ default: 0 })
    amount_paid: number;

    @Prop({ required: true })
    balance: number;

    @Prop({ enum: ["Active", "Deactivated", "Cancelled"], default: "Active" })
    status: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}

@Schema({ timestamps: true })
export class FeesPayment {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Student" })
    student: Student;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "StudentSubscription" })
    subscription: StudentSubscription;

    @Prop({ enum: ["Mpesa", "Cash", "Bank Deposit"] })
    payment_method: string;

    @Prop({ required: true })
    amount: number;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const FeesPaymentSchema = SchemaFactory.createForClass(FeesPayment);
export const StudentSubscriptionSchema = SchemaFactory.createForClass(StudentSubscription);