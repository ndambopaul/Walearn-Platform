import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentLink, ContentLinkSchema, Course, CourseCategory, CourseCategorySchema, CourseContent, CourseContentPart, CourseContentPartSchema, CourseContentSchema, CourseMaterial, CourseMaterialSchema, CourseSchema, CourseSubCategory, CourseSubCategorySchema } from './courses.schemas';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Course.name, schema: CourseSchema},
    {name: CourseCategory.name, schema: CourseCategorySchema},
    {name: CourseSubCategory.name, schema: CourseSubCategorySchema},
    {name: CourseContent.name, schema: CourseContentSchema},
    {name: CourseContentPart.name, schema: CourseContentPartSchema},
    {name: CourseMaterial.name, schema: CourseMaterialSchema},
    {name: ContentLink.name, schema: ContentLinkSchema},
  ]), UsersModule],
  providers: [CoursesService],
  controllers: [CoursesController],
  exports: [CoursesService]
})
export class CoursesModule {}
