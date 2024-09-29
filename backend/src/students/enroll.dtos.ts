import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose";

export class EnrollDto {
    @IsNotEmpty()
    course_id: Types.ObjectId;

    @IsNotEmpty()
    student_id: Types.ObjectId;
}