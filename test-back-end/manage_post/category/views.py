# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework import status
# from rest_framework.response import Response
# from .models import CategoryModels
# from .serializers import CategorySerializer

# class CategoryViews(APIView):
#     def get(self, request):
#         try:
#             queryset = CategoryModels.objects.all()
#             serializer = CategorySerializer(queryset, many=True)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         except:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def post(self, request, format=None):
#         serializer = CategorySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
