from django.contrib import admin
from apps.core.models import Cohort


# Register your models here.
@admin.register(Cohort)
class CohortAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "course", "start_date", "end_date")
