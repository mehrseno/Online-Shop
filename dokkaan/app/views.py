from django.db.models.query import QuerySet
from rest_framework.response import Response
from rest_framework import generics, serializers, status
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser


class ProductView(generics.RetrieveAPIView):
    queryset = Product.objects.all()


    def get(self, request):
        queryset = self.get_queryset()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)

class FileterCategoryView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    def get(self, request):
        queryset = self.get_queryset()
        serializers = CategorySerializer(queryset, many=True)
        return Response(serializers.data)



class CategoryView(generics.RetrieveAPIView, generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAuthenticated, IsAdminUser)

    def get(self, request):
        queryset = self.get_queryset()
        serializers = CategorySerializer(queryset, many=True)
        return Response(serializers.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response("bad request", status=status.HTTP_400_BAD_REQUEST)

class DeleteCategoryView(generics.RetrieveDestroyAPIView, generics.UpdateAPIView):
    permission_classes = (IsAuthenticated, IsAdminUser)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def delete(self, request, pk):
        instance = Category.objects.get(pk=pk)
        if instance.title == "undefined":
            return Response("Cannot delete default system category", status=status.HTTP_400_BAD_REQUEST)
        instance.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        instance = Category.objects.get(pk=pk)
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid():
            if instance.title == "undefined":
                return Response("Cannot delete default system category", status=status.HTTP_400_BAD_REQUEST)
            instance.delete()
            serializer.save()
            return Response("Updated", status=status.HTTP_200_OK)
        return Response("bad request", status=status.HTTP_400_BAD_REQUEST)

