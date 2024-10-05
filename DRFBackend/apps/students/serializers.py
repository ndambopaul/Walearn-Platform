from rest_framework import serializers
from apps.students.models import Student, StudentCourse, Attendance, AssigmentSubmission


class StudentSerializer(serializers.ModelSerializer):
    user_details = serializers.SerializerMethodField()
    class Meta:
        model = Student
        fields = "__all__"

    def get_user_details(self, obj):
        
        return {
            "first_name": obj.user.first_name,
            "last_name": obj.user.last_name,
            "email": obj.user.email,
            "username": obj.user.username,
            "phone": obj.user.phone,
            "gender": obj.user.gender,
            "address": obj.user.address,
            "city": obj.user.city,
            "country": obj.user.country,
            "avatar": obj.user.avatar.url,
        }


class AttendanceSerializer(serializers.ModelSerializer):
    student_name = serializers.SerializerMethodField()
    course = serializers.SerializerMethodField()
    session_date = serializers.SerializerMethodField()

    class Meta:
        model = Attendance
        fields = "__all__"

    def get_course(self, obj):
        return obj.session.course.title

    def get_session_date(self, obj):
        return obj.session.session_date
    
    def get_student_name(self, obj):
        return f"{obj.student.user.first_name} {obj.student.user.last_name}"


class AssigmentSubmissionSerializer(serializers.ModelSerializer):
    student_name = serializers.SerializerMethodField()
    course = serializers.SerializerMethodField()
    assignment_title = serializers.SerializerMethodField()

    class Meta:
        model = AssigmentSubmission
        fields = "__all__"

    def get_course(self, obj):
        return obj.assignment.course.title

    def get_assignment_title(self, obj):
        return obj.assignment.title

    def get_student_name(self, obj):
        print(f"{obj.student.user.first_name} {obj.student.user.last_name}")
        return f"{obj.student.user.first_name} {obj.student.user.last_name}"


class SubmitAssignmentSerializer(serializers.Serializer):
    assignment = serializers.IntegerField()
    submission_link = serializers.CharField(max_length=255)
