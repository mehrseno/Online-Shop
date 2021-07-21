from django.urls import path
from rest_framework import views
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from .views import CategoryView, ProductDetail, ProductView, DeleteCategoryView, FileterCategoryView

urlpatterns = [
    path('products/', ProductView.as_view(), name="posts_view"),
    path('categories/', CategoryView.as_view(), name="category_view"),
    path('filters-categories/', FileterCategoryView.as_view(), name="category_view"),
    path('categories/<str:pk>', DeleteCategoryView.as_view(), name="delete_category_view"),
    path('products/<slug:category_slug>/<slug:product_slug>/', ProductDetail.as_view()),
]