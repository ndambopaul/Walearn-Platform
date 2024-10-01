import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Grade, GradeSchema, Student, StudentAssignment, StudentAssignmentSchema, StudentAttendance, StudentAttendanceSchema, StudentSchema } from './students.schemas';


@Module({
  imports: [MongooseModule.forFeature([
    { name: Student.name, schema: StudentSchema },
    { name: StudentAssignment.name, schema: StudentAssignmentSchema },
    { name: Grade.name, schema: GradeSchema },
    { name: StudentAttendance.name, schema: StudentAttendanceSchema},
  ])],
  providers: [StudentsService],
  controllers: [StudentsController],
  exports: [StudentsService]
})
export class StudentsModule {}
