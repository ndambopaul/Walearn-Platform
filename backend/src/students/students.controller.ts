import { Controller, Get, Post, Param, ValidationPipe, Body } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentAssignmentDto } from './assignments.dtos';
import { GradeDto } from './grades.dtos';
import { EnrollDto } from './enroll.dtos';
import { Types } from 'mongoose';

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

    @Get("grades")
    async getGrades() {
        return this.studentsService.getGrades();
    }

    @Post("grades")
    async createGrade(@Body(ValidationPipe) gradeDto: GradeDto) {
        return this.studentsService.createGrade(gradeDto)
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
