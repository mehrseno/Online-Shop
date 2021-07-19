from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from .views import ProductView

urlpatterns = [
    path('products/', ProductView.as_view(), name="posts_view"),
    path('api-token/', TokenObtainPairView.as_view()),
    path('api-token_refresh/', TokenRefreshView.as_view()),
]