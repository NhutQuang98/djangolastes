from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import CategoryModels
from account.models import AccountModels
from .serializers import CategorySerializer, CategoryAccountSerializer
from django.db.models import Q
from django.db import connection
from django.db.models.query import QuerySet
import pdb

class CategoryDefault(APIView):
    # select all category
    def get(self, request):
        # pdb.set_trace()
        # print("debug: ")
        try:
            # # query = """
            # #     SELECT c.*, a.name
            # #     FROM category_categorymodels as c
            # #     INNER JOIN account_accountmodels as a 
            # #     ON c.category_account_id = a.id
            # # """

            # query = """
            #     SELECT * FROM category_categorymodels
            # """

            # with connection.cursor() as cursor:
            #     cursor.execute(query)
            #     rows = cursor.fetchall()
            
            # data = []
            # pdb.set_trace()

            # for row in rows:
            #     row_list = list(row)
            #     row_list[3] = row_list[3].strftime('%Y-%m-%d %H:%M:%S.%f')
            #     row_list[4] = row_list[4].strftime('%Y-%m-%d %H:%M:%S.%f')
            #     row = tuple(row_list)
            #     account = AccountModels.objects.get(id=row[2])
            #     category = CategoryModels(category_id=row[0], category_name=row[1], category_account_id=account)
            #     data.append(category)
            # serializer = CategorySerializer(data, many=True)

            # if serializer.is_valid():
            #     print(serializer.data)
            #     return Response(serializer.data, status=status.HTTP_200_OK)
            # else:
            #     print("Not valid")
            #     print(serializer.error_messages)
            # data = CategoryModels.objects.annotate(name=F('category_account_id__name')).values()

            pdb.set_trace()
            data = CategoryModels.objects.all()
            serializer = CategorySerializer(data, many=True)
            print("data")
            print(data)
            print("serializer.data")
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_404_NOT_FOUND)
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
        
    # delete
    def delete(self, request, category_id):
        try:
            category = get_object_or_404(CategoryModels, category_id=category_id)
            category.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(None, status=status.HTTP_400_BAD_REQUEST)
    
    # put
    def put(self, request, category_id):
        try:
            data = CategoryModels.objects.get(category_id=category_id)
            serializer = CategorySerializer(data, category_name=request.data.get('category_name'))
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except CategoryModels.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

# select category by category_id
class CategorySearchById(APIView):
    def get(self, request, category_id):
        try:
            data = CategoryModels.objects.get(category_id=category_id)
            if data is not None:
                serializer = CategorySerializer(data)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(None, status=status.HTTP_404_NOT_FOUND)
        except:
            return Response(None, status=status.HTTP_400_BAD_REQUEST)

# select category by category_name
class CategorySearch(APIView):
    def get(self, request, search_key):
        try:
            data = CategoryModels.objects.filter(Q(category_name__icontains=search_key))
            # pdb.set_trace()
            # print("data")
            # print(data)
            if data.exists():
                serializer = CategorySerializer(data, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(None, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(None, status=status.HTTP_400_BAD_REQUEST)