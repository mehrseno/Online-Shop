from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from .views import CategoryView, ProductView, DeleteCategoryView, FileterCategoryView

urlpatterns = [
    path('products/', ProductView.as_view(), name="posts_view"),
    path('api-token/', TokenObtainPairView.as_view()),
    path('api-token_refresh/', TokenRefreshView.as_view()),
    path('categories/', CategoryView.as_view(), name="category_view"),
    path('filters-categories/', FileterCategoryView.as_view(), name="category_view"),
    path('categories/<str:pk>', DeleteCategoryView.as_view(), name="delete_category_view")
]