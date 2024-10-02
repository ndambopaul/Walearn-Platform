import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

@Schema({ timestamps: true })
export class Attendance {
    @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ required: true })
    status: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance)