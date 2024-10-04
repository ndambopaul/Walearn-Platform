from django.contrib import admin
from apps.courses.models import (
    Course,
    Category,
    SubCategory,
    CourseModule,
    CourseContent,
    CourseContentLink,
    CourseModuleTopic,
    CourseSession,
    CourseAssignment,
)


# Register your models here.
@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "sub_category",
        "course_period",
        "price",
        "discount",
        "published",
        "course_status",
        "course_type",
    )
    search_fields = ("title",)
    list_filter = ("sub_category",)


admin.site.register(Category)


@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "category")
    search_fields = ("name",)
    list_filter = ("category",)


@admin.register(CourseModule)
class CourseModuleAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "course")
    search_fields = ("title",)
    list_filter = ("course",)


@admin.register(CourseModuleTopic)
class CourseModuleTopicAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "course_module")
    search_fields = ("title",)
    list_filter = ("course_module",)


@admin.register(CourseContent)
class CourseContentAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "course_topic")
    search_fields = ("title",)
    list_filter = ("course_topic",)


@admin.register(CourseContentLink)
class CourseContentLinkAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "course_content")
    search_fields = ("title",)
    list_filter = ("course_content",)


@admin.register(CourseSession)
class CourseSessionAdmin(admin.ModelAdmin):
    list_display = ("id", "course", "session_date")
    search_fields = ("course__title",)
    list_filter = ("course",)


@admin.register(CourseAssignment)
class CourseAssignmentAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "course", "total_score", "due_date")
    search_fields = ("title",)
    list_filter = ("course",)
