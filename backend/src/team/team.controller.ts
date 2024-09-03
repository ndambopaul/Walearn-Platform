import { Body, Controller, Get, Param, Patch, Post, Put, UploadedFile, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamMemberDto, TeamMemberUpdateDto } from './team.dtos';
import { FileInterceptor } from '@nestjs/platform-express';

import { createMulterStorage } from 'src/utils/file.storage';

@Controller('team')
export class TeamController {
    constructor(private readonly teamService: TeamService) {}

    @Get()
    async getTeamMembers() {
        return this.teamService.getTeamMembers()
    }

    @Get(":id")
    async getOneTeamMember(@Param("id") id: string) {
        return this.teamService.getOneTeamMember(id)
    }

    @Post()
    @UseInterceptors(FileInterceptor("file", { storage: createMulterStorage("./uploads/team")}))
    async createTeamMember(@Body(ValidationPipe) memberDto: TeamMemberDto, @UploadedFile() file: Express.Multer.File){
        if (!file) {
            return { failed: "A team member must have an image" }
        }
        return this.teamService.createTeamMember(memberDto, file.filename)
    }

    @Patch(":id")
    async editTeamMember(@Param("id") id: string, @Body(ValidationPipe) teamMemberUpdateDto: TeamMemberUpdateDto) {
        return this.teamService.editTeamMember(id, teamMemberUpdateDto)
    }
}
