from django.db import models

from apps.core.models import AbstractBaseModel

# Create your models here.
ATTENDANCE_CHOICES = (
    ("Present", "Present"),
    ("Absent", "Absent"),
    ("Pending", "Pending"),
)

ASSIGNMENT_STATUS_CHOICES = (
    ("Pending", "Pending"),
    ("Approved", "Approved"),
    ("Rejected", "Rejected"),
)


class Student(AbstractBaseModel):
    user = models.OneToOneField(
        "users.User", on_delete=models.CASCADE, related_name="student"
    )
    cohort = models.ForeignKey("core.Cohort", on_delete=models.SET_NULL, null=True)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.user.first_name
    
 


class StudentCourse(AbstractBaseModel):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="studentcourses"
    )
    course = models.ForeignKey("courses.Course", on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.student.user.first_name} {self.course.title}"


class Attendance(AbstractBaseModel):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="attendance"
    )
    session = models.ForeignKey("courses.CourseSession", on_delete=models.CASCADE)
    marked_as = models.CharField(
        max_length=255, choices=ATTENDANCE_CHOICES, default="Pending"
    )
    active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.student.user.first_name} {self.session.course.title}"


class AssigmentSubmission(AbstractBaseModel):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="assigmentsubmissions"
    )
    assignment = models.ForeignKey("courses.CourseAssignment", on_delete=models.CASCADE)
    submission_link = models.URLField(null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    score = models.IntegerField(null=True)
    status = models.CharField(
        max_length=255, choices=ASSIGNMENT_STATUS_CHOICES, default="Pending"
    )
    active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.student.user.first_name} {self.assignment.title}"
