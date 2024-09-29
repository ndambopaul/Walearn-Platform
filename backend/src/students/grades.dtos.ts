import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose";

export class GradeDto {
    @IsNotEmpty()
    studentId: Types.ObjectId;

    @IsNotEmpty()
    courseId: Types.ObjectId;

    @IsNotEmpty()
    assignmentId: Types.ObjectId;
}