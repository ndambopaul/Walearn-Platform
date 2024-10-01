import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ContentLink, Course, CourseCategory, CourseContent, CourseContentPart, CourseMaterial, CourseSubCategory } from './courses.schemas';
import { Model, Types } from 'mongoose';
import { CourseCategoryDto, CourseDto, CourseSubCategoryDto } from './courses.dtos';
import { User } from 'src/users/users.schemas';
import { CourseContentDto, CourseContentPartDto, CourseMaterialDto } from './course-content.dtos';
import { ContentLinkDto } from './content-link.dtos';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name) private readonly courseModel: Model<Course>,
        @InjectModel(CourseCategory.name) private readonly categoryModel: Model<CourseCategory>,
        @InjectModel(CourseSubCategory.name) private readonly subCategory: Model<CourseSubCategory>,
        @InjectModel(CourseContent.name) private readonly courseContentModel: Model<CourseContent>,
        @InjectModel(CourseContentPart.name) private readonly courseContentPartModel: Model<CourseContentPart>,
        @InjectModel(CourseMaterial.name) private readonly courseMaterialModel: Model<CourseMaterial>,
        @InjectModel(ContentLink.name) private readonly contentLinkModel: Model<ContentLink>
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
        return this.courseModel.findOne({ _id: courseId  }).populate("authors")
    }

    async addCourseAuthor(courseId: string, user: User) {
        const course = await this.getOneCourse(courseId)
        course.authors.push(user._id)
        return await course.save()
    }

    /* Course Content Management */
    async createCourseContent(courseContentDto: CourseContentDto) {
        return await this.courseContentModel.create(courseContentDto)
    }

    async getCourseContent(courseId: string) {
        return this.courseContentModel.find({ course: courseId })
    }

    async createCourseContentPart(courseContentPartDto: CourseContentPartDto) {
        return await this.courseContentPartModel.create(courseContentPartDto)
    }

    async getCourseContentPart(courseContentId: string) {
        return this.courseContentPartModel.find({ content: courseContentId })
    }

    async createCourseMaterial(courseMaterialDto: CourseMaterialDto) {
        return await this.courseMaterialModel.create(courseMaterialDto)
    }

    async getCourseMaterial(courseContentId: string) {
        return this.courseMaterialModel.find({ coursecontentpart: courseContentId })
    }

    async getCourseMaterialDetails(id: string) {
        return this.courseMaterialModel.findOne({ _id: id })
    }

    async getContentLinks(id: string) {
        if (!id) return []
        return this.contentLinkModel.find({ coursematerial: id })
    }

    async createContentLink(contentLinkDto: ContentLinkDto) {
        return await this.contentLinkModel.create(contentLinkDto)
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
