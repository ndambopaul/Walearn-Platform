from django.urls import path
from apps.instructors.views import InstructorProfileAPIView

urlpatterns = [
    path("profile/", InstructorProfileAPIView.as_view(), name="profile"),
]