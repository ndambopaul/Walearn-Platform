import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Grade, Student, StudentAssignment } from './students.schemas';
import { Model, Types } from 'mongoose';
import { EnrollDto } from './enroll.dtos';
import { StudentAssignmentDto } from './assignments.dtos';
import { GradeDto } from './grades.dtos';

@Injectable()
export class StudentsService {

    constructor(
        @InjectModel(Grade.name) private readonly gradeModel: Model<Grade>,
        @InjectModel(StudentAssignment.name) private readonly assignmentModel: Model<StudentAssignment>,
        @InjectModel(Student.name) private readonly studentModel: Model<Student>,
    ) {}

    async getStudents() {
        return this.studentModel.find({})
    }

    async getStudent(id: Types.ObjectId) {
        return this.studentModel.findOne({ _id: id })
    }

    async enrollStudentIntoCourse(enrollDto: EnrollDto) {
        return await this.studentModel.updateOne({ _id: enrollDto.student_id }, { $push: { courses: enrollDto.course_id } })
    }

    async getAssigmnents() {
        return this.assignmentModel.find({})
    }

    async createAssignment(assignmentDto: StudentAssignmentDto) {
        return await this.assignmentModel.create(assignmentDto)
    }

    async getGrades() {
        return await this.gradeModel.find({})
    }

    async createGrade(gradeDto: GradeDto) {
        return await this.gradeModel.create(gradeDto)
    }

}
