import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schemas';
import { FilterQuery, Model } from 'mongoose';
import { UserDto } from './users.dtos';
import { hash } from 'bcryptjs';
import { Student } from 'src/students/students.schemas';
import { Course } from 'src/courses/courses.schemas';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        @InjectModel(Student.name) private readonly studentModel: Model<Student>,
        @InjectModel(Course.name) private readonly CourseModel: Model<Course>
    ) {}


    async getAllUsers() {
        return this.userModel.find({})
    }

    async registerUser(userDto: UserDto) {
        const user = await new this.userModel({
            ...userDto,
            password: await hash(userDto.password, 10)
        }).save()

        if (userDto.role === "STUDENT") {
            return await new this.studentModel({
                user: user._id,
                status: "Active"
            }).save()
        }
        return user
    }

    async getStudentProfile(user: User) {
        const student = await this.studentModel.findOne({
            user: user._id
        }).populate("user")

        if (!student) {
            throw new NotFoundException("Student not found!!")
        }

        const courses = await this.CourseModel.find({
            _id: { $in: student.courses }
        }).populate("authors")

        return { userId: user._id, student: student, courses: courses }
    }

    async getUser(query: FilterQuery<User>) {
        const user = (await this.userModel.findOne(query)).toObject()

        if(!user) {
            throw new NotFoundException("Users not found!!")
        }
        return user
    }

}
