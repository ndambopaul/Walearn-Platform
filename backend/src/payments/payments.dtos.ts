import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "mongoose";

export class FeesPaymentDto {
    @IsNotEmpty()
    subscription: Types.ObjectId;

    @IsString()
    @IsNotEmpty()
    payment_method: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;
}

export class StudentSubscriptionDto {
    @IsNotEmpty()
    student: Types.ObjectId;

    @IsNumber()
    @IsNotEmpty()
    total_amount: number;

    @IsNumber()
    @IsNotEmpty()
    balance: number;
}