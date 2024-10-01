import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { Types } from "mongoose";

export class GradeDto {
    @IsNotEmpty()
    student: Types.ObjectId;

    @IsNotEmpty()
    course: Types.ObjectId;

    @IsNotEmpty()
    assignment: Types.ObjectId;

    @IsString()
    submission_link: string
}