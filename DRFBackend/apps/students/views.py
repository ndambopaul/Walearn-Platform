from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.students.models import Attendance, AssigmentSubmission, Student
from apps.students.serializers import AttendanceSerializer, AssigmentSubmissionSerializer, SubmitAssignmentSerializer
# Create your views here.
class AttendanceAPIView(generics.ListCreateAPIView):
    queryset = Attendance.objects.all().order_by("-created_at")
    serializer_class = AttendanceSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "Student":
            return Attendance.objects.filter(student__user=self.request.user).order_by("-created_at")
        return super().get_queryset()
    

class AssigmentSubmissionAPIView(generics.ListCreateAPIView):
    queryset = AssigmentSubmission.objects.all().order_by("-created_at")
    serializer_class = AssigmentSubmissionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "Student":
            return AssigmentSubmission.objects.filter(student__user=self.request.user).order_by("-created_at")
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
                score=0
            )

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)