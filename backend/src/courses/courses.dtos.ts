import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "mongoose";

export class CourseDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    price: Number;

    @IsNumber()
    discount: Number;

    @IsEnum(["SHORT_COURSE", "BOOTCAMP", "MASTERCLASS", "WEBINAR"])
    course_type: "SHORT_COURSE" | "BOOTCAMP" | "MASTERCLASS" | "WEBINAR";

    @IsBoolean()
    is_paid: Boolean;

    @IsString()
    @IsNotEmpty()
    course_period: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    category: Types.ObjectId;

    @IsNotEmpty()
    subcategory: Types.ObjectId;

}

export class NewCourseAuthorDto {
    @IsNotEmpty()
    authorId: string;

    @IsNotEmpty()
    courseId: string;
}

export class CourseCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    icon: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class CourseSubCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    category: Types.ObjectId;

}