import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose";

export class EnrollDto {
    @IsNotEmpty()
    course: Types.ObjectId;

    @IsNotEmpty()
    student: Types.ObjectId;
}