import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseCategory, CourseSubCategory } from './courses.schemas';
import { Model, Types } from 'mongoose';
import { CourseCategoryDto, CourseDto, CourseSubCategoryDto } from './courses.dtos';
import { User } from 'src/users/users.schemas';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name) private readonly courseModel: Model<Course>,
        @InjectModel(CourseCategory.name) private readonly categoryModel: Model<CourseCategory>,
        @InjectModel(CourseSubCategory.name) private readonly subCategory: Model<CourseSubCategory>
    ){}

    async getCourses() {
        return this.courseModel.find({}).populate("authors")
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

    // Course Category
    async getCourseCategories() {
        return this.categoryModel.find({})
    }

    async createCourseCategory(categoryDto: CourseCategoryDto) {
        return await this.categoryModel.create(categoryDto)
    }

    // Course Sub Category
    async getCourseSubCategories() {
        return this.subCategory.find({})
    }

    async createCourseSubCategory(subCategoryDto: CourseSubCategoryDto) {
        return await this.subCategory.create(subCategoryDto)
    }
}
