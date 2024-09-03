import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './courses.schemas';
import { Model, Types } from 'mongoose';
import { CourseDto } from './courses.dtos';
import { User } from 'src/users/users.schemas';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name) private readonly courseModel: Model<Course>
    ){}

    async getCourses() {
        return this.courseModel.find({}).populate("creator")
    }

    async createCourse(courseDto: CourseDto, user: User) {
        return new this.courseModel({
            ...courseDto,
            author: user._id
        }).save()
    }

    async getOneCourse(courseId: string) {
        return this.courseModel.findOne({ _id: courseId  })
    }

    async addCourseAuthor(courseId: string, user: User) {
        const course = await this.getOneCourse(courseId)
        course.authors.push(user._id)
        return await course.save()
    }
}
