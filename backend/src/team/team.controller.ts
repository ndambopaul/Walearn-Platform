import { Body, Controller, Get, Post, UploadedFile, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamMemberDto } from './team.dtos';
import { FileInterceptor } from '@nestjs/platform-express';

import { createMulterStorage } from 'src/utils/file.storage';

@Controller('team')
export class TeamController {
    constructor(private readonly teamService: TeamService) {}

    @Get()
    async getTeamMembers() {
        return this.teamService.getTeamMembers()
    }

    @Post()
    @UseInterceptors(FileInterceptor("file", { storage: createMulterStorage("./uploads/team")}))
    async createTeamMember(@Body(ValidationPipe) memberDto: TeamMemberDto, @UploadedFile() file: Express.Multer.File){
        return this.teamService.createTeamMember(memberDto, file.filename)
    }
}
