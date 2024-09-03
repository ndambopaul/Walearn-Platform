import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { SchemaTypes, Types } from "mongoose";
import { User } from "src/users/users.schemas";

@Schema()
export class CustomerMessage {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    email: string;

    @Prop()
    phone_number: string;

    @Prop()
    course_interested: string;

    @Prop({ required: false })
    content: string;

    @Prop({ enum: ["UNOPENED", "CLOSED", "FOLLOWING"], default: "UNOPENED" })
    status: "UNOPENED" | "CLOSED" | "FOLLOWING"

    @Prop({ default: Date.now })
    createdAt: Date
};

@Schema()
export class MessageStatusUpdate {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    user: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "CustomerMessage" })
    message: CustomerMessage;

    @Prop({ enum: ["Closed", "Following"] })
    previous_status: string;

    @Prop({ enum: ["Closed", "Following"] })
    next_status: string;

    @Prop({ default: Date.now })
    createdAt: Date
}

@Schema()
export class NewsLetter {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop()
    email: string;

    @Prop({ default: true })
    subscribed: Boolean;

    @Prop({ default: false })
    notified: Boolean;

    @Prop({ default: Date.now })
    createdAt: Date;
}

@Schema()
export class Consultation {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    email: string;

    @Prop()
    phone_number: string;

    @Prop({ default: Date.now })
    createdAt: Date
}

export const CustomerMessageSchema = SchemaFactory.createForClass(CustomerMessage);
export const NewsLetterSchema = SchemaFactory.createForClass(NewsLetter)