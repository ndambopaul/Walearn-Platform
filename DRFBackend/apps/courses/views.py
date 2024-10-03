from django.shortcuts import render

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics, status

from apps.courses.models import (
    Course,
    Category,
    SubCategory,
    CourseModule,
    CourseContent,
    CourseContentLink,
    CourseModuleTopic,
    CourseAssignment
)
from apps.courses.serializers import (
    CourseSerializer,
    CategorySerializer,
    SubCategorySerializer,
    CourseModuleSerializer,
    CourseContentSerializer,
    CourseContentLinkSerializer,
    CourseModuleTopicSerializer,
    CourseAssignmentSerializer
)


# Create your views here.
class CategoryAPIView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    lookup_field = "pk"


class SubCategoryAPIView(generics.ListCreateAPIView):
    serializer_class = SubCategorySerializer
    queryset = SubCategory.objects.all()


class SubCategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SubCategorySerializer
    queryset = SubCategory.objects.all()

    lookup_field = "pk"


class CourseAPIView(generics.ListCreateAPIView):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        print(f"Current User: {user.email}")
        if user.role == "Student":
            student_courses = user.student.studentcourses.all().values_list("course_id", flat=True)
            return self.queryset.filter(id__in=list(student_courses))

        return super().get_queryset()


class CourseDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

    lookup_field = "pk"


class CourseModuleAPIView(generics.ListCreateAPIView):
    serializer_class = CourseModuleSerializer
    queryset = CourseModule.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        course = self.request.query_params.get("course")

        if course:
            return self.queryset.filter(course__id=course)
        return super().get_queryset()


class CourseModuleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseModuleSerializer
    queryset = CourseModule.objects.all()

    lookup_field = "pk"


class CourseModuleTopicAPIView(generics.ListCreateAPIView):
    serializer_class = CourseModuleTopicSerializer
    queryset = CourseModuleTopic.objects.all()

    def get_queryset(self):
        module = self.request.query_params.get("module")

        if module:
            return self.queryset.filter(course_module__id=module)
        return super().get_queryset()


class CourseModuleTopicDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseModuleTopicSerializer
    queryset = CourseModuleTopic.objects.all()

    lookup_field = "pk"


class CourseContentAPIView(generics.ListCreateAPIView):
    serializer_class = CourseContentSerializer
    queryset = CourseContent.objects.all()

    def get_queryset(self):
        module_topic = self.request.query_params.get("topic")
        if module_topic:
            return self.queryset.filter(course_topic__id=module_topic)

        return super().get_queryset()


class CourseContentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseContentSerializer
    queryset = CourseContent.objects.all()

    lookup_field = "pk"


class CourseContentLinkAPIView(generics.ListCreateAPIView):
    serializer_class = CourseContentLinkSerializer
    queryset = CourseContentLink.objects.all()

    def get_queryset(self):
        content = self.request.query_params.get("content")
        if content:
            return self.queryset.filter(course_content__id=content)

        return super().get_queryset()


class CourseContentLinkDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseContentLinkSerializer
    queryset = CourseContentLink.objects.all()

    lookup_field = "pk"


class CourseAssigmentAPIView(generics.ListCreateAPIView):
    serializer_class = CourseAssignmentSerializer
    queryset = CourseAssignment.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "Student":
            student_courses = user.student.studentcourses.all().values_list("course_id", flat=True)

            return self.queryset.filter(course__id__in=list(student_courses))

        return super().get_queryset()
    

class CourseAssigmentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseAssignmentSerializer
    queryset = CourseAssignment.objects.all()

    lookup_field = "pk"