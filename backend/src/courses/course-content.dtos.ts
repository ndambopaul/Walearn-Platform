import { IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";


export class CourseContentDto {
    @IsNotEmpty()
    course: Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    title: string;
}

export class UpdateCourseContentDto extends CourseContentDto {}

export class CourseContentPartDto {
    @IsNotEmpty()
    content: Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    title: string;
}

export class UpdateCourseContentPartDto extends CourseContentPartDto {}


export class CourseMaterialDto {
    @IsNotEmpty()
    coursecontentpart: Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    content: string;

}

export class UpdateCourseMaterialDto extends CourseMaterialDto {}