from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from apps.instructors.models import Instructor, InstructorCourse
# Create your views here.
class InstructorProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user

        courses = InstructorCourse.objects.filter(instructor__user=user)

        response = {
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "username": user.username,
            "phone": user.phone,
            "gender": user.gender,
            "address": user.address,
            "city": user.city,
            "country": user.country,
            "avatar": user.avatar.url if user.avatar else None,
            "courses_count": courses.count(),
        }
        return Response(response, status=status.HTTP_200_OK)


