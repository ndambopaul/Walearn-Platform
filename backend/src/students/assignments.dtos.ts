import { IsDate, IsNotEmpty, IsString} from "class-validator"
import { Date, Types } from "mongoose"

export class StudentAssignmentDto {
    @IsNotEmpty()
    course: Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    due_date: Date;
}