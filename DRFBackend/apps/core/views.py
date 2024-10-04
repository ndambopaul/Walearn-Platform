from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
class HealthAPIView(APIView):
    def get(self, request, *args, **kwargs):
        return Response({ "message": "Server is running OK" }, status=status.HTTP_200_OK)