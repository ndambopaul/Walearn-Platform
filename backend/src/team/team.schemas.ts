import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

@Schema()
export class TeamMember {
    @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    position: string;

    @Prop({ required: true })
    description: string;

    @Prop()
    image: string;
}

export const TeamMemberSchema = SchemaFactory.createForClass(TeamMember)