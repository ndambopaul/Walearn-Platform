from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

from apps.users.views import RegisterUserAPIView, UsersView

urlpatterns = [
    path("", UsersView.as_view(), name="users"),
    path("register/", RegisterUserAPIView.as_view(), name="register"),
    path("login/", TokenObtainPairView.as_view(), name="login"),
    path("refresh-token/", TokenRefreshView.as_view(), name="refresh-token"),
    path("verify-token/", TokenVerifyView.as_view(), name="verify-token"),
]
