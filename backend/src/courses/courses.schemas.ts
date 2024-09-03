import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { SchemaTypes, Types } from "mongoose";
import { User } from "src/users/users.schemas";

@Schema()
export class Course {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    creator: User;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] })
    authors: Types.ObjectId[];

    @Prop({ required: true })
    title: string;

    @Prop({ default: 0 })
    price: Number;

    @Prop({ default: 0 })
    discount: Number;

    @Prop({ enum: ["SHORT_COURSE", "BOOTCAMP", "MASTERCLASS", "WEBINAR"] })
    course_type: string;

    @Prop({  default: true})
    is_paid: Boolean;

    @Prop()
    course_period: string;

    @Prop()
    description: string;

    @Prop({ default: false })
    published: Boolean;

    @Prop({ enum: ["ACTIVE", "UNDER REVIEW", "DECLINED", "INFO REQUESTED"], default: "UNDER REVIEW" })
    course_status: string;

    @Prop({ default: Date.now })
    createdAt: Date;
};

export const CourseSchema = SchemaFactory.createForClass(Course)