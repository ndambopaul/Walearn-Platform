from django.urls import path
from apps.courses.views import (
    CategoryAPIView,
    CategoryDetailAPIView,
    SubCategoryAPIView,
    SubCategoryDetailAPIView,
    CourseAPIView,
    CourseDetailAPIView,
    CourseModuleAPIView,
    CourseModuleDetailAPIView,
    CourseContentAPIView,
    CourseContentDetailAPIView,
    CourseContentLinkAPIView,
    CourseContentLinkDetailAPIView,
    CourseModuleTopicDetailAPIView,
    CourseModuleTopicAPIView,
    CourseAssigmentAPIView,
    CourseAssigmentDetailAPIView
)

urlpatterns = [
    path('', CourseAPIView.as_view(), name='courses'),
    path('<int:pk>/', CourseDetailAPIView.as_view(), name='course-detail'),
    path('categories/', CategoryAPIView.as_view(), name='categories'),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('sub-categories/', SubCategoryAPIView.as_view(), name='sub-categories'),
    path('sub-categories/<int:pk>/', SubCategoryDetailAPIView.as_view(), name='sub-category-detail'),
    path('modules/', CourseModuleAPIView.as_view(), name='modules'),
    path('modules/<int:pk>/', CourseModuleDetailAPIView.as_view(), name='module-detail'),
    path('module-topics/', CourseModuleTopicAPIView.as_view(), name='module-topics'),
    path('module-topics/<int:pk>/', CourseModuleTopicDetailAPIView.as_view(), name='module-topic-detail'),
    path('contents/', CourseContentAPIView.as_view(), name='contents'),
    path('contents/<int:pk>/', CourseContentDetailAPIView.as_view(), name='content-detail'),
    path('contents-links/', CourseContentLinkAPIView.as_view(), name='contents-links'),
    path('contents-links/<int:pk>/', CourseContentLinkDetailAPIView.as_view(), name='content-link-detail'),
    path('assignments/', CourseAssigmentAPIView.as_view(), name='assignments'),
    path('assignments/<int:pk>/', CourseAssigmentDetailAPIView.as_view(), name='assignment-detail'),
]