from django.db import models

from apps.core.models import AbstractBaseModel

# Create your models here.
PAYMENT_STATUS_CHOICES = (
    ("Paid", "Paid"),
    ("Pending", "Pending"),
    ("Completed", "Completed"),
    ("Future", "Future"),
)


class StudentSubscription(AbstractBaseModel):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE)
    course = models.ForeignKey("courses.Course", on_delete=models.CASCADE)
    cohort = models.ForeignKey("core.Cohort", on_delete=models.SET_NULL, null=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.student.user.first_name} {self.course.title}"


class StudentSubscriptionPayment(AbstractBaseModel):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE)
    subscription = models.ForeignKey(StudentSubscription, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    expected_date = models.DateField()
    status = models.CharField(max_length=255, choices=PAYMENT_STATUS_CHOICES)

    def __str__(self):
        return f"{self.subscription.student.user.first_name} {self.subscription.course.title}"
