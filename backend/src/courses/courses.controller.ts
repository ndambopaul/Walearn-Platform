import { Body, Controller, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth-guard';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from 'src/users/users.schemas';
import { CourseDto, NewCourseAuthorDto } from './courses.dtos';
import { UsersService } from 'src/users/users.service';

@Controller('courses')
export class CoursesController {
    constructor(
        private readonly coursesService: CoursesService,
        private readonly usersService: UsersService
    ) {}

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

    @Post(":id")
    @UseGuards(JwtAuthGuard)
    async addCourseAuthor(@CurrentUser() user: User, @Param("id") id: string, @Body(ValidationPipe) authorDto: NewCourseAuthorDto) {
        const author = await this.usersService.getUser({ _id: authorDto.authorId })
        return this.coursesService.addCourseAuthor(id, author)
    }

}
