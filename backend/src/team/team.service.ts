import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TeamMember } from './team.schemas';
import { Model, Types } from 'mongoose';
import { TeamMemberDto, TeamMemberUpdateDto } from './team.dtos';

@Injectable()
export class TeamService {
    constructor(
        @InjectModel(TeamMember.name) private readonly teamModel: Model<TeamMember>
    ){}

    async getTeamMembers() {
        return this.teamModel.find({})
    }

    async getOneTeamMember(teamMemberId: string) {
        return await this.teamModel.findOne({ _id: teamMemberId })
    }

    async createTeamMember(teamDto: TeamMemberDto, image: string) {
        return await new this.teamModel({
            ...teamDto,
            image: image
        }).save()
    }

    async editTeamMember(teamMemberId: string, memberUpdateDto: TeamMemberUpdateDto) {
        return await this.teamModel.findByIdAndUpdate(teamMemberId, { ...memberUpdateDto }, { new: true })
    }
}
