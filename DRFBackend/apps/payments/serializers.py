from rest_framework import serializers
from apps.payments.models import StudentSubscription, StudentSubscriptionPayment


class StudentSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentSubscription
        fields = "__all__"


class StudentSubscriptionPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentSubscriptionPayment
        fields = "__all__"


class RecordPaymentSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    payment_method = serializers.CharField(max_length=255)
    subscription = serializers.IntegerField()
