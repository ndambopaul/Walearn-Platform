import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    phone_number: string;

    @IsStrongPassword()
    password: string;

    @IsEnum(["STUDENT", "INSTRUCTOR", "ADMIN"])
    role: "STUDENT" | "INSTRUCTOR" | "ADMIN";

    @IsEnum(["Male", "Female"])
    gender: "Male" | "Female"
}