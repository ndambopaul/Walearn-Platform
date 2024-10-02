import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";


export class AttendanceDto {
    @IsString()
    @IsNotEmpty()
    status: string;
}
export class UpdateStudentAttendanceDto {
    @IsNotEmpty()
    attendanceId: Types.ObjectId;

    @IsString()
    @IsNotEmpty()
    status: string;
}

export class GenerateAttendanceDto {
    @IsNotEmpty()
    course: Types.ObjectId;

    @IsNotEmpty()
    session_date: Date;
}