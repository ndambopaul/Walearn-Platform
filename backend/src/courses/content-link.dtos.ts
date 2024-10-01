import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { Types } from "mongoose";

export class ContentLinkDto {
    @IsNotEmpty()
    coursematerial: Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsUrl()
    @IsNotEmpty()
    content_link: string
}