from django.urls import path
from apps.core.views import HealthAPIView

urlpatterns = [
    path("", HealthAPIView.as_view(), name="health"),
]