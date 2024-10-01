import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Grade, Student, StudentAssignment, StudentAttendance } from './students.schemas';
import { Model, Types } from 'mongoose';
import { EnrollDto } from './enroll.dtos';
import { StudentAssignmentDto } from './assignments.dtos';
import { GradeDto } from './grades.dtos';
import { GenerateAttendanceDto, UpdateStudentAttendanceDto } from './attendance.dtos';
import { User } from 'src/users/users.schemas';

@Injectable()
export class StudentsService {

    constructor(
        @InjectModel(Grade.name) private readonly gradeModel: Model<Grade>,
        @InjectModel(StudentAssignment.name) private readonly assignmentModel: Model<StudentAssignment>,
        @InjectModel(Student.name) private readonly studentModel: Model<Student>,
        @InjectModel(StudentAttendance.name) private readonly attendanceModel: Model<StudentAttendance>
    ) {}

    async getStudents() {
        return this.studentModel.find({})
    }

    async getStudent(id: Types.ObjectId) {
        return this.studentModel.findOne({ _id: id })
    }

    async enrollStudentIntoCourse(enrollDto: EnrollDto) {
        return await this.studentModel.updateOne({ _id: enrollDto.student }, { $push: { courses: enrollDto.course } })
    }

    async getAssigmnents() {
        return this.assignmentModel.find({})
    }

    async createAssignment(assignmentDto: StudentAssignmentDto) {
        return await this.assignmentModel.create(assignmentDto)
    }

    async getAssignment(id: string) {
        return await this.assignmentModel.findById(id).populate("course")
    }

    async getGrades() {
        return await this.gradeModel.find({})
    }

    async getGradesByStudent(user: User) {
        console.log(user)
        
        const student = await this.studentModel.findOne({ user: user._id })
        console.log(student)
        if(!student) return []
        return await this.gradeModel.find({ student: student._id }).populate("course").populate("assignment")
        
       
    }

    async createGrade(gradeDto: GradeDto) {
        return await this.gradeModel.create(gradeDto)
    }

    async generateStudentAttendance(attendanceDto: GenerateAttendanceDto) {
        const courseStudents = await this.studentModel.find({ courses: attendanceDto.course })

        if(courseStudents.length > 0) {
            for(const student of courseStudents) {
                const newAttendance = new this.attendanceModel({
                    course: attendanceDto.course,
                    student: student._id,
                    session_date: attendanceDto.session_date
                })
                await newAttendance.save()
            }
        }
        
        return { success: "Attenance Successfully Generated!!" }
    }

    async getStudentAttendance(userId: Types.ObjectId) {
        const student = await this.studentModel.findOne({ user: userId })
        if(!student) return []
        return await this.attendanceModel.find({ student: student._id }).populate({ path: "course", select: "title" })
    }

    async markStudentAttendance(markAttendanceDto: UpdateStudentAttendanceDto) {
        const attendance = await this.attendanceModel.findById({ _id: markAttendanceDto.attendanceId })

        if(!attendance) return {}

        attendance.status = markAttendanceDto.status
        attendance.isActive = false
        return await attendance.save()
    }

}
