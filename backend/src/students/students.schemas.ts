import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { SchemaTypes, Types } from "mongoose";

import { User } from "src/users/users.schemas";
import { Course } from "src/courses/courses.schemas";

@Schema({ timestamps: true })
export class Student {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    user: User;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }] })
    courses: Course;

    @Prop({ enum: ["Active", "Deactivated", "Suspended"] })
    status: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}

@Schema({ timestamps: true })
export class StudentAssignment {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Course" })
    course: Course;

    @Prop({ enum: ["Open", "Closed"], default: "Open" })
    status: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: false })
    description: string;

    @Prop({ required: true })
    due_date: Date;

    @Prop({ default: Date.now })
    createdAt: Date;
}

@Schema({ timestamps: true })
export class Grade {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Student" })
    student: Student;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Course" })
    course: Course;

    @Prop({ type: SchemaTypes.ObjectId, ref: "StudentAssignment" })
    assignment: StudentAssignment;

    @Prop({ required: true })
    submission_link: string;

    @Prop({ default: 0 })
    grade: number;

    @Prop({ required: false })
    comment: string;

    @Prop({ enum: ["Pending", "Submitted", "Approved", "Rejected"], default: "Pending" })
    status: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}

@Schema({ timestamps: true })
export class StudentAttendance {
    @Prop({ type: SchemaTypes.ObjectId, auto: true })
    _id: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Student" })
    student: Student;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Course" })
    course: Course;

    @Prop({ required: true })
    session_date: Date;

    @Prop({ enum: ["Present", "Absent", "Pending"], default: "Pending" })
    status: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
export const StudentAssignmentSchema = SchemaFactory.createForClass(StudentAssignment);
export const GradeSchema = SchemaFactory.createForClass(Grade);
export const StudentAttendanceSchema = SchemaFactory.createForClass(StudentAttendance)