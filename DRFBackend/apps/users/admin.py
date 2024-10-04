from django.contrib import admin

from apps.users.models import User


# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "role", "gender", "phone", "city", "country")
    search_fields = ("first_name", "last_name", "phone")
    list_filter = ("role", "gender")
