from django.shortcuts import render

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status, generics

from apps.users.models import User
from apps.users.serializers import UsersSerializer, RegisterUserSerializer

from apps.instructors.models import Instructor
from apps.students.models import Student

# Create your views here.
class UsersView(generics.ListAPIView):
    serializer_class = UsersSerializer
    queryset = User.objects.all()


class RegisterUserAPIView(generics.CreateAPIView):
    serializer_class = RegisterUserSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = self.get_serializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            user.set_password(request.data["password"])
            user.save()

            if user.role == "Instructor":
                instructor = Instructor.objects.create(user=user)
                instructor.is_active = True
                instructor.save()
            elif user.role == "Student":
                student = Student.objects.create(user=user)
                student.is_active = True
                student.save()

            return Response(
                {"message": "User created successfully"}, status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
