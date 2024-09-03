import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './courses.schemas';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Course.name, schema: CourseSchema}
  ]), UsersModule],
  providers: [CoursesService],
  controllers: [CoursesController],
  exports: [CoursesService]
})
export class CoursesModule {}
