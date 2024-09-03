import { IsNotEmpty, IsString } from "class-validator";

export class TeamMemberDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    position: string;

    @IsString()
    @IsNotEmpty()
    description: string

}