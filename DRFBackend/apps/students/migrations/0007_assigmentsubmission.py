# Generated by Django 5.1.1 on 2024-10-03 11:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("courses", "0006_courseassignment"),
        ("students", "0006_student_cohort"),
    ]

    operations = [
        migrations.CreateModel(
            name="AssigmentSubmission",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("submission_link", models.URLField(null=True)),
                ("submitted_at", models.DateTimeField(auto_now_add=True)),
                ("score", models.IntegerField(null=True)),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("Pending", "Pending"),
                            ("Approved", "Approved"),
                            ("Rejected", "Rejected"),
                        ],
                        default="Pending",
                        max_length=255,
                    ),
                ),
                ("active", models.BooleanField(default=True)),
                (
                    "assigment",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="courses.courseassignment",
                    ),
                ),
                (
                    "student",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="assigmentsubmissions",
                        to="students.student",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
