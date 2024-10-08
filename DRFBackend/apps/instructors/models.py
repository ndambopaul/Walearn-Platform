from django.db import models
from apps.core.models import AbstractBaseModel


# Create your models here.
class Instructor(AbstractBaseModel):
    user = models.OneToOneField("users.User", on_delete=models.CASCADE)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"
