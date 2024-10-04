from django.db import models
from apps.core.models import AbstractBaseModel
from apps.core.constants import CourseStatusEnum, CourseTypesEnum


# Create your models here.
class Category(AbstractBaseModel):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class SubCategory(AbstractBaseModel):
    name = models.CharField(max_length=250)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Course(AbstractBaseModel):
    title = models.CharField(max_length=250)
    description = models.TextField()
    image = models.ImageField(upload_to="courses", null=True, blank=True)
    sub_category = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    course_period = models.CharField(max_length=255)
    published = models.BooleanField(default=False)
    course_status = models.CharField(max_length=255, choices=CourseStatusEnum.choices())
    course_type = models.CharField(max_length=255, choices=CourseTypesEnum.choices())
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    instructors = models.ManyToManyField(
        "instructors.Instructor", related_name="courseinstructors"
    )

    def __str__(self):
        return self.title


class CourseModule(AbstractBaseModel):
    title = models.CharField(max_length=250)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class CourseModuleTopic(AbstractBaseModel):
    title = models.CharField(max_length=250)
    course_module = models.ForeignKey(CourseModule, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class CourseContent(AbstractBaseModel):
    title = models.CharField(max_length=250)
    course_topic = models.ForeignKey(CourseModuleTopic, on_delete=models.CASCADE)
    content = models.TextField()
    content_link = models.URLField(null=True)

    def __str__(self):
        return self.title


class CourseContentLink(AbstractBaseModel):
    course_content = models.ForeignKey(CourseContent, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    content_link = models.URLField()

    def __str__(self):
        return self.title


class CourseSession(AbstractBaseModel):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    cohort = models.ForeignKey("core.Cohort", on_delete=models.SET_NULL, null=True)
    session_date = models.DateField()

    def __str__(self):
        return f"{self.course.title} - {self.session_date}"


class CourseAssignment(AbstractBaseModel):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    description = models.TextField()
    assignment_link = models.URLField(null=True)
    due_date = models.DateField()
    total_score = models.IntegerField(default=5)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
