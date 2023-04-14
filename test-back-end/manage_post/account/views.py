from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import UserModels
from .serializers import AccountSerializer
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

import pdb

class AccountViews(APIView):
    def get(self, request):
        try:
            data = UserModels.objects.all()
            serializer = AccountSerializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import AccountSerializer 

@permission_classes([AllowAny])
class AccountLogin(APIView):
    def post(self, request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            data = UserModels.objects.get(username=username, password=password)
            if data is not None:
                # serializer = AccountSerializer(data)
                # print(serializer.data)
                refresh = RefreshToken.for_user(data)
                access_token = str(refresh.access_token)
                return Response({"Message": "OK", "access_token": access_token}, status=status.HTTP_200_OK)
            else:
                print("fail")
                return Response({"Not OK"}, status=status.HTTP_404_NOT_FOUND)
        except:
            print("except")
            return Response({"except"}, status=status.HTTP_400_BAD_REQUEST)

@permission_classes([AllowAny])
class GetSession(APIView):
    def post(self, request):
        pdb.set_trace()
        try:
            access_token = request.data.get('access_token')
            # pdb.set_trace()
            print("access_token")
            print(access_token)
            return Response({"access_token": access_token},status=status.HTTP_200_OK)
        except:
            return Response({"access_token": None}, status=status.HTTP_400_BAD_REQUEST)
