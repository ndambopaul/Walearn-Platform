from django.contrib import admin
from apps.payments.models import StudentSubscription, StudentSubscriptionPayment
# Register your models here.
@admin.register(StudentSubscription)
class StudentSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'student', 'course', 'cohort', 'total_amount', 'amount_paid', 'balance', 'active')
    list_filter = ('student', 'course', 'cohort', 'active')
    search_fields = ('student__user__first_name', 'student__user__last_name', 'course__title', 'cohort__title')

@admin.register(StudentSubscriptionPayment)
class StudentSubscriptionPaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'student', 'subscription', 'payment_method', 'amount', 'expected_date', 'status')
    list_filter = ('payment_method', 'status')
    search_fields = ('student__user__first_name', 'student__user__last_name', 'subscription__course__title')
