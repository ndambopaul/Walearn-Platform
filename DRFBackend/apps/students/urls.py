from django.urls import path
from apps.students.views import (
    AttendanceAPIView,
    AssigmentSubmissionAPIView,
    AssigmentSubmissionDetailAPIView,
    SubmitAssignmentAPIView
)

urlpatterns = [
    path("attendances/", AttendanceAPIView.as_view(), name="attendances"),
    path("assignments-submissions/", AssigmentSubmissionAPIView.as_view(), name="assignments-submissions"),
    path("assignments-submissions/<int:pk>/", AssigmentSubmissionDetailAPIView.as_view(), name="assignment-submission-detail"),
    path("submit-assignment/", SubmitAssignmentAPIView.as_view(), name="submit-assignment"),

]