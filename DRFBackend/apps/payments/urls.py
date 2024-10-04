from django.urls import path
from apps.payments.views import (
    StudentSubscriptionDetailAPIView,
    StudentSubscriptionPaymentDetailAPIView,
    StudentSubscriptionAPIView,
    StudentSubscriptionPaymentAPIView,
    RecordPaymentAPIView,
)

urlpatterns = [
    path("subscriptions/", StudentSubscriptionAPIView.as_view(), name="subscriptions"),
    path(
        "subscriptions/<int:pk>/",
        StudentSubscriptionDetailAPIView.as_view(),
        name="subscription-detail",
    ),
    path(
        "subscription-payments/",
        StudentSubscriptionPaymentAPIView.as_view(),
        name="subscription-payments",
    ),
    path(
        "subscription-payments/<int:pk>/",
        StudentSubscriptionPaymentDetailAPIView.as_view(),
        name="subscription-payment-detail",
    ),
    path("record-payment/", RecordPaymentAPIView.as_view(), name="record-payment"),
]
