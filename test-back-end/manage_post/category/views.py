from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import CategoryModels
from .serializers import CategorySerializer
from django.db.models import Q, F
import pdb

class CategoryDefault(APIView):
    # select all category
    def get(self, request):
        try:
            data = CategoryModels.objects.all()
            serializer = CategorySerializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(None, status=status.HTTP_400_BAD_REQUEST)

    # create category
    def post(self, request):
        # pdb.set_trace()
        print("debug")
        print(request.data)
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class CategoryDetele(APIView):
    # delete
    def delete(self, request, category_id):
        # pdb.set_trace()
        print("debug:")
        print(category_id)
        try:
            category = get_object_or_404(CategoryModels, category_id=category_id)
            category.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(None, status=status.HTTP_400_BAD_REQUEST)

import pdb
class CategorySearch(APIView):
    def get(self, request, search_key):
        try:
            data = CategoryModels.objects.filter(Q(category_name__icontains=search_key))
            serializer = CategorySerializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(None, status=status.HTTP_400_BAD_REQUEST)