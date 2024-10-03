from rest_framework import serializers
from apps.users.models import User


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "username",
            "email",
            "password",
            "role",
            "gender",
            "phone",
        ]
        extra_kwargs = {"password": {"write_only": True}}


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}
