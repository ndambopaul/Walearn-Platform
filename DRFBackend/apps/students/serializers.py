from rest_framework import serializers
from apps.students.models import Student, StudentCourse, Attendance, AssigmentSubmission

class AttendanceSerializer(serializers.ModelSerializer):
    course = serializers.SerializerMethodField()
    session_date = serializers.SerializerMethodField()
    class Meta:
        model = Attendance
        fields = "__all__"

    def get_course(self, obj):
        return obj.session.course.title
    

    def get_session_date(self, obj):
        return obj.session.session_date
    

class AssigmentSubmissionSerializer(serializers.ModelSerializer):
    course = serializers.SerializerMethodField()
    assignment_title = serializers.SerializerMethodField()
    class Meta:
        model = AssigmentSubmission
        fields = "__all__"

    def get_course(self, obj):
        return obj.assignment.course.title
    
    def get_assignment_title(self, obj):
        return obj.assignment.title

class SubmitAssignmentSerializer(serializers.Serializer):
    assignment = serializers.IntegerField()
    submission_link = serializers.CharField(max_length=255)