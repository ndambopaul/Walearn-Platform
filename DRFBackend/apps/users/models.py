from django.db import models
from django.contrib.auth.models import AbstractUser

from apps.core.models import AbstractBaseModel
from apps.core.constants import USER_ROLE_CHOICES

# Create your models here.
GENDER_CHOICES = (
    ("Male", "Male"),
    ("Female", "Female"),
)


class User(AbstractUser, AbstractBaseModel):
    role = models.CharField(max_length=50, choices=USER_ROLE_CHOICES)
    gender = models.CharField(max_length=50, choices=GENDER_CHOICES)
    phone = models.CharField(max_length=50, null=True, blank=True)
    address = models.CharField(max_length=250, null=True, blank=True)
    avatar = models.ImageField(upload_to="users", null=True, blank=True)
    city = models.CharField(max_length=250, null=True, blank=True)
    country = models.CharField(max_length=250, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def name(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        db_table = "users"
