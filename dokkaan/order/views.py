from django.db.models import query
from django.views import generic
import stripe 
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.shortcuts import render

from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import serializers, status, generics
from rest_framework import authentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import Order, OrderItem
from .serializers import OrderSerializer


class OrderAPIView(generic.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated)

    def get(self, request):
        queryset= self.get_queryset()
        serializers = OrderSerializer(queryset, many=True)
        return Response(serializers.data)