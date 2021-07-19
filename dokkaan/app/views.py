from rest_framework.response import Response
from rest_framework import generics, serializers
from .models import Product
from .serializers import ProductSerializer


class ProductView(generics.RetrieveAPIView):
    queryset = Product.objects.all()


    def get(self, request):
        queryset = self.get_queryset()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)