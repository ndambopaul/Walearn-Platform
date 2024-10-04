from datetime import datetime
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.permissions import IsAuthenticated

from apps.payments.models import StudentSubscription, StudentSubscriptionPayment
from apps.payments.serializers import (
    StudentSubscriptionSerializer,
    StudentSubscriptionPaymentSerializer,
    RecordPaymentSerializer,
)

# Create your views here.
date_today = datetime.now().date()


class StudentSubscriptionAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = StudentSubscriptionSerializer
    queryset = StudentSubscription.objects.all().order_by("-created_at")

    def get_queryset(self):
        user = self.request.user
        if user.role == "Student":
            return self.queryset.filter(student__user=user)
        return super().get_queryset()


class StudentSubscriptionDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = StudentSubscriptionSerializer
    queryset = StudentSubscription.objects.all()

    lookup_field = "pk"


class StudentSubscriptionPaymentAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = StudentSubscriptionPaymentSerializer
    queryset = StudentSubscriptionPayment.objects.all().order_by("-created_at")

    def get_queryset(self):
        user = self.request.user
        if user.role == "Student":
            return self.queryset.filter(student__user=user)
        return super().get_queryset()


class StudentSubscriptionPaymentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = StudentSubscriptionPaymentSerializer
    queryset = StudentSubscriptionPayment.objects.all()

    lookup_field = "pk"


class RecordPaymentAPIView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RecordPaymentSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            subscription = StudentSubscription.objects.get(
                id=serializer.validated_data["subscription"]
            )

            subscription.amount_paid += serializer.validated_data["amount"]
            subscription.save()

            subscription.balance = subscription.total_amount - subscription.amount_paid
            subscription.save()

            StudentSubscriptionPayment.objects.create(
                student=subscription.student,
                subscription=subscription,
                payment_method=serializer.validated_data["payment_method"],
                amount=serializer.validated_data["amount"],
                expected_date=date_today,
                status="Paid",
            )

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
