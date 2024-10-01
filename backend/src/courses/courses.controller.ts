import { Body, Controller, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth-guard';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from 'src/users/users.schemas';
import { CourseCategoryDto, CourseDto, CourseSubCategoryDto, NewCourseAuthorDto } from './courses.dtos';
import { UsersService } from 'src/users/users.service';
import { CourseContentDto, CourseContentPartDto, CourseMaterialDto } from './course-content.dtos';
import { ContentLinkDto } from './content-link.dtos';

@Controller('courses')
export class CoursesController {
    constructor(
        private readonly coursesService: CoursesService,
        private readonly usersService: UsersService
    ) {}

     // Course Categories
    @Get("categories")
     async getCourseCategories() {
         return await this.coursesService.getCourseCategories()
    }
 
    @Post("categories")
     async createCourseCategory(@Body(ValidationPipe) categoryDto: CourseCategoryDto) {
         return await this.coursesService.createCourseCategory(categoryDto)
    }

    @Get("sub-categories")
     async getCourseSubCategories() {
        return this.coursesService.getCourseSubCategories()
    }

    @Post("sub-categories")
    async createCourseSubCategory(@Body(ValidationPipe) subCategoryDto: CourseSubCategoryDto) {
        return this.coursesService.createCourseSubCategory(subCategoryDto)
    }

    @Get()
    async getCourses() {
        return this.coursesService.getCourses()
    }

    @Get(":id")
    async getOneCourse(@Param("id") id: string) {
        return this.coursesService.getOneCourse(id)
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async createCourse(@CurrentUser() user: User, @Body(ValidationPipe) courseDto: CourseDto) {
        if (user.role !== "INSTRUCTOR") {
            return { failed: "Only an instructor can create a course!!" }
        }
        return this.coursesService.createCourse(courseDto, user)
    }

    @Post("course-modules")
    @UseGuards(JwtAuthGuard)
    async createCourseContent(@CurrentUser() user: User, @Body(ValidationPipe) courseContentDto: CourseContentDto) {
        return this.coursesService.createCourseContent(courseContentDto)
    }

    @Get("course-modules/:id")
    @UseGuards(JwtAuthGuard)
    async getCourseContent(@Param("id") id: string) {
        return this.coursesService.getCourseContent(id)
    }

    @Post("course-module-parts")
    @UseGuards(JwtAuthGuard)
    async createCourseContentPart(@CurrentUser() user: User, @Body(ValidationPipe) courseContentPartDto: CourseContentPartDto) {
        return this.coursesService.createCourseContentPart(courseContentPartDto)
    }

    @Get("course-module-parts/:id")
    @UseGuards(JwtAuthGuard)
    async getCourseContentPart(@Param("id") id: string) {
        return this.coursesService.getCourseContentPart(id)
    }

    @Post("course-materials")
    @UseGuards(JwtAuthGuard)
    async createCourseMaterial(@CurrentUser() user: User, @Body(ValidationPipe) courseMaterialDto: CourseMaterialDto) {
        return this.coursesService.createCourseMaterial(courseMaterialDto)
    }

    @Get("course-materials/:id")
    @UseGuards(JwtAuthGuard)
    async getCourseMaterial(@Param("id") id: string) {
        return this.coursesService.getCourseMaterial(id)
    }

    @Get("course-material-details/:id")
    @UseGuards(JwtAuthGuard)
    async getCourseMaterialDetails(@Param("id") id: string) {
        return this.coursesService.getCourseMaterialDetails(id)
    }

    @Get("content-links/:id")
    @UseGuards(JwtAuthGuard)
    async getContentLinks(@Param("id") id: string) {
        return this.coursesService.getContentLinks(id)
    }

    @Post("content-links")
    @UseGuards(JwtAuthGuard)
    async createContentLink(@CurrentUser() user: User, @Body(ValidationPipe) contentLinkDto: ContentLinkDto) {
        return this.coursesService.createContentLink(contentLinkDto)
    }

    @Post(":id")
    @UseGuards(JwtAuthGuard)
    async addCourseAuthor(@CurrentUser() user: User, @Param("id") id: string, @Body(ValidationPipe) authorDto: NewCourseAuthorDto) {
        const author = await this.usersService.getUser({ _id: authorDto.authorId })
        return this.coursesService.addCourseAuthor(id, author)
    }

}
