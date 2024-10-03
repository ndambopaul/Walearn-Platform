from rest_framework import serializers
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


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ["id", "name", "category"]


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"


class CourseModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseModule
        fields = "__all__"


class CourseModuleTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseModuleTopic
        fields = "__all__"


class CourseContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseContent
        fields = "__all__"


class CourseContentLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseContentLink
        fields = "__all__"


class CourseAssignmentSerializer(serializers.ModelSerializer):
    course_title = serializers.SerializerMethodField()
    class Meta:
        model = CourseAssignment
        fields = "__all__"

    def get_course_title(self, obj):
        return obj.course.title