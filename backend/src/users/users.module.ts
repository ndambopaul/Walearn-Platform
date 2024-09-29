import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schemas';
import { StudentsModule } from 'src/students/students.module';
import { Student, StudentSchema } from 'src/students/students.schemas';
import { Course, CourseSchema } from 'src/courses/courses.schemas';

@Module({
  imports: [MongooseModule.forFeature([
    {name: User.name, schema: UserSchema},
    {name: Student.name, schema: StudentSchema},
    {name: Course.name, schema: CourseSchema}
  ]), StudentsModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
