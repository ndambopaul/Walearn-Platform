import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TeamMember } from './team.schemas';
import { Model } from 'mongoose';
import { TeamMemberDto } from './team.dtos';

@Injectable()
export class TeamService {
    constructor(
        @InjectModel(TeamMember.name) private readonly teamModel: Model<TeamMember>
    ){}

    async getTeamMembers() {
        return this.teamModel.find({})
    }

    async createTeamMember(teamDto: TeamMemberDto, image: string) {
        return await new this.teamModel({
            ...teamDto,
            image: image
        }).save()
    }

}
