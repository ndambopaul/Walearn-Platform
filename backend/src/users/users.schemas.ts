import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema()
export class User {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop({ unique: true })
    username: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    phone_number: string;

    @Prop({ enum: ["STUDENT", "INSTRUCTOR", "ADMIN"], required: true })
    role: string;

    @Prop({enum: ["Male", "Female"]})
    gender: string;

    @Prop()
    password: string;

    @Prop({ default: Date.now })
    createdAt: Date
};

export const UserSchema = SchemaFactory.createForClass(User)