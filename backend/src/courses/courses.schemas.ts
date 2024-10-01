import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { SchemaTypes, Types } from "mongoose";
import { User } from "src/users/users.schemas";


@Schema()
export class CourseCategory {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop()
    name: string;

    @Prop()
    icon: string;

    @Prop()
    description: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}

@Schema()
export class CourseSubCategory{
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "CourseCategory" })
    category: CourseCategory;

    @Prop()
    name: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}


@Schema()
export class Course {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "CourseCategory" })
    category: CourseCategory;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "CourseSubCategory" })
    sub_category: CourseSubCategory;

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


@Schema({ timestamps: true })
export class CourseContent  {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Course" })
    course: Course;

    @Prop({ required: true })
    title: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}

@Schema({ timestamps: true })
export class CourseContentPart  {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "CourseContent" })
    content: CourseContent;

    @Prop({ required: true })
    title: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}


@Schema({ timestamps: true })
export class CourseMaterial  {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "CourseContentPart" })
    coursecontentpart: CourseContentPart;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: false })
    additional_content: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}

@Schema({ timestamps: true })
export class ContentLink  {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "CourseMaterial" })
    coursematerial: CourseMaterial;

    @Prop({ required: true })
    title: string;

    @Prop({ required: false })
    content_link: string;

    @Prop({ default: Date.now })
    createdAt: Date
}


export const CourseSchema = SchemaFactory.createForClass(Course);
export const CourseCategorySchema = SchemaFactory.createForClass(CourseCategory);
export const CourseSubCategorySchema = SchemaFactory.createForClass(CourseSubCategory);

export const CourseContentSchema = SchemaFactory.createForClass(CourseContent);
export const CourseContentPartSchema = SchemaFactory.createForClass(CourseContentPart);
export const CourseMaterialSchema = SchemaFactory.createForClass(CourseMaterial);
export const ContentLinkSchema = SchemaFactory.createForClass(ContentLink)