from django.contrib import admin
from apps.instructors.models import Instructor, InstructorCourse
# Register your models here.
@admin.register(Instructor)
class InstructorAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "is_active")
    search_fields = ("user__first_name", "user__last_name")
    list_filter = ("is_active",)


@admin.register(InstructorCourse)
class InstructorCourseAdmin(admin.ModelAdmin):
    list_display = ["id", "instructor", "course"]