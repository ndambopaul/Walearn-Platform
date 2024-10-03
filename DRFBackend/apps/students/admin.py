from django.contrib import admin
from apps.students.models import Student, StudentCourse, Attendance, AssigmentSubmission
# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "is_active")
    search_fields = ("user__first_name", "user__last_name")
    list_filter = ("is_active",)


@admin.register(StudentCourse)
class StudentCourseAdmin(admin.ModelAdmin):
    list_display = ("id", "student", "course")
    search_fields = ("student__user__first_name", "student__user__last_name", "course__title")
    list_filter = ("course",)


@admin.register(Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = ("id", "student", "session__course", "session", "marked_as", "active")
    search_fields = ("student__user__first_name", "student__user__last_name", "course__title")
    list_filter = ("session__course",)


@admin.register(AssigmentSubmission)
class AssigmentSubmissionAdmin(admin.ModelAdmin):
    list_display = ("id", "student", "assignment", "score", "status", "active")
    search_fields = ("student__user__first_name", "student__user__last_name", "assignment__title")
    list_filter = ("assignment", )