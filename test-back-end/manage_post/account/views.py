import os, hashlib, binascii
from .models import AccountModels
from .serializers import AccountSerializer
from django.contrib.auth.hashers import make_password, check_password
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

# @permission_classes([AllowAny])
class AccountAll(APIView):
    def get(self, request):
        try:
            data = AccountModels.objects.all()
            serializer = AccountSerializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @permission_classes([AllowAny])
class SignIn(APIView):
    def post(self, request):
        try:
            # get username & password từ request
            username = request.data.get('username')
            password = request.data.get('password')
            # kiểm tra login
            data = AccountModels.objects.get(username=username)
            if data is not None:
                password_matched = check_password(password, data.password)
                if password_matched:
                # tạo refresh token
                    refresh = RefreshToken.for_user(data)
                    # tạo access token
                    access_token = str(refresh.access_token)
                    print("success")
                    return Response({"Message": "OK", "refresh_token": str(refresh), "access_token": access_token}, status=status.HTTP_200_OK)
                else:
                    return Response({"Not OK"}, status=status.HTTP_404_NOT_FOUND)
            else:
                print("fail")
                return Response({"Not OK"}, status=status.HTTP_404_NOT_FOUND)
        except:
            print("except")
            return Response({"except"}, status=status.HTTP_400_BAD_REQUEST)
        

# @permission_classes([AllowAny])
class SignUp(APIView):
    def post(self, request):
        # mã hóa password
        username = request.data.get('username')
        get_password = request.data.get('password')
        password_hash = make_password(get_password)
        # insert account
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['password'] = password_hash
            serializer.save()
            data = AccountModels.objects.get(username=username, password=password_hash)
            # tạo refresh token
            refresh = RefreshToken.for_user(data)
            # tạo access token
            access_token = str(refresh.access_token)
            print("success")
            return Response({"Message": "OK", "refresh_token": str(refresh), "access_token": access_token}, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
