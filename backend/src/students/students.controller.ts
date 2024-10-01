import { Controller, Get, Post, Param, ValidationPipe, Body, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentAssignmentDto } from './assignments.dtos';
import { GradeDto } from './grades.dtos';
import { EnrollDto } from './enroll.dtos';
import { Types } from 'mongoose';
import { GenerateAttendanceDto, UpdateStudentAttendanceDto } from './attendance.dtos';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth-guard';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from 'src/users/users.schemas';

@Controller('students')
export class StudentsController {
    constructor(
        private readonly studentsService: StudentsService
    ) {}

    
    @Get("assignments")
    async getAssignments() {
        return this.studentsService.getAssigmnents();
    }

    @Post("assignments")
    async createAssignment(@Body(ValidationPipe) assignmentDto: StudentAssignmentDto) {
        return this.studentsService.createAssignment(assignmentDto)
    }

    @Get("assignments/:id")
    async getAssignment(@Param("id") id: string) {
        return this.studentsService.getAssignment(id)
    }

    @Get("grades")
    async getGrades() {
        return this.studentsService.getGrades();
    }

    @Get("student-grades")
    @UseGuards(JwtAuthGuard)
    async getGradesByStudent(@CurrentUser() user: User) {
        return this.studentsService.getGradesByStudent(user)
    }

    @Post("grades")
    async createGrade(@Body(ValidationPipe) gradeDto: GradeDto) {
        return this.studentsService.createGrade(gradeDto)
    }

    @Post("student-attendances")
    async generateStudentAttendance(@Body(ValidationPipe) attendanceDto: GenerateAttendanceDto) {
        return this.studentsService.generateStudentAttendance(attendanceDto)
    }

    @Get("student-attendances")
    @UseGuards(JwtAuthGuard)
    async getStudentAttendance(@CurrentUser() user: User) {
        return this.studentsService.getStudentAttendance(user._id)
    }

    @Post("mark-attendances")
    async markStudentAttendance(@Body(ValidationPipe) markAttendanceDto: UpdateStudentAttendanceDto) {
        return this.studentsService.markStudentAttendance(markAttendanceDto)
    }

    @Get()
    async getStudents() {
        return this.studentsService.getStudents()
    }

    @Post("enroll")
    async enrollStudentIntoCourse(@Body(ValidationPipe) enrollDto: EnrollDto) {
        return this.studentsService.enrollStudentIntoCourse(enrollDto)
    }

    @Get(":id")
    async getStudent(@Param("id") id: Types.ObjectId) {
        return this.studentsService.getStudent(id)
    }
}
