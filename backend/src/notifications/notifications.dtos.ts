import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CustomerMessageDto {
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    course_interested: string;

    @IsString()
    content: string;
}