import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schemas';
import { FilterQuery, Model } from 'mongoose';
import { UserDto } from './users.dtos';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>
    ) {}

    async getAllUsers() {
        return this.userModel.find({})
    }

    async registerUser(userDto: UserDto) {
        return await new this.userModel({
            ...userDto,
            password: await hash(userDto.password, 10)
        }).save()
    }

    async getUser(query: FilterQuery<User>) {
        const user = (await this.userModel.findOne(query)).toObject()

        if(!user) {
            throw new NotFoundException("Users not found!!")
        }
        return user
    }

}
