from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from apps.students.models import Attendance, AssigmentSubmission, Student, StudentCourse
from apps.students.serializers import (
    AttendanceSerializer,
    AssigmentSubmissionSerializer,
    SubmitAssignmentSerializer,
    StudentSerializer
)


# Create your views here.
class AttendanceAPIView(generics.ListCreateAPIView):
    queryset = Attendance.objects.all().order_by("-created_at")
    serializer_class = AttendanceSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "Student":
            return Attendance.objects.filter(student__user=self.request.user).order_by(
                "-created_at"
            )
        elif user.role == "Instructor":
            instructor_courses = user.instructor.instructorcourses.all().values_list("course_id", flat=True)
            student_courses = StudentCourse.objects.filter(course__id__in=list(instructor_courses)).values_list("student_id", flat=True)

            return self.queryset.filter(student__id__in=list(student_courses))

        return super().get_queryset()


class AssigmentSubmissionAPIView(generics.ListCreateAPIView):
    queryset = AssigmentSubmission.objects.all().order_by("-created_at")
    serializer_class = AssigmentSubmissionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "Student":
            return AssigmentSubmission.objects.filter(
                student__user=self.request.user
            ).order_by("-created_at")
        elif user.role == "Instructor":
            instructor_courses = user.instructor.instructorcourses.all().values_list("course_id", flat=True)
            student_courses = StudentCourse.objects.filter(course__id__in=list(instructor_courses)).values_list("student_id", flat=True)

            return self.queryset.filter(student__id__in=list(student_courses))

        return super().get_queryset()


class AssigmentSubmissionDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AssigmentSubmission.objects.all()
    serializer_class = AssigmentSubmissionSerializer
    permission_classes = [IsAuthenticated]

    lookup_field = "pk"


class SubmitAssignmentAPIView(generics.CreateAPIView):
    serializer_class = SubmitAssignmentSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        user = request.user
        if serializer.is_valid(raise_exception=True):
            student = Student.objects.get(user=user)
            AssigmentSubmission.objects.create(
                student=student,
                assignment_id=serializer.validated_data["assignment"],
                submission_link=serializer.validated_data["submission_link"],
                score=0,
            )

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = request.user

        courses = StudentCourse.objects.filter(student__user=user)
        attendances = Attendance.objects.filter(student__user=user)

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
            "avatar": user.avatar.url,
            "courses_count": courses.count(),
            "attendances_count": attendances.count()
        }
        return Response(response, status=status.HTTP_200_OK)


class StudentAPIView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "Instructor":
            instructor_courses = user.instructor.instructorcourses.all().values_list("course_id", flat=True)
            student_courses = StudentCourse.objects.filter(course__id__in=list(instructor_courses)).values_list("student_id", flat=True)
            return Student.objects.filter(id__in=list(student_courses))
        return super().get_queryset()