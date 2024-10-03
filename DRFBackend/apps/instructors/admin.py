from django.contrib import admin
from apps.instructors.models import Instructor
# Register your models here.
@admin.register(Instructor)
class InstructorAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "is_active")
    search_fields = ("user__first_name", "user__last_name")
    list_filter = ("is_active",)