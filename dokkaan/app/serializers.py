from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Category, Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "amount",
            "slug",
            "get_category",
            "sold_count",
            "created_date",
            "get_absolute_url",
            "get_image",
            "get_thumbnail",
            "price",
        )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'