import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseCategory, CourseCategorySchema, CourseSchema, CourseSubCategory, CourseSubCategorySchema } from './courses.schemas';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Course.name, schema: CourseSchema},
    {name: CourseCategory.name, schema: CourseCategorySchema},
    {name: CourseSubCategory.name, schema: CourseSubCategorySchema}
  ]), UsersModule],
  providers: [CoursesService],
  controllers: [CoursesController],
  exports: [CoursesService]
})
export class CoursesModule {}
