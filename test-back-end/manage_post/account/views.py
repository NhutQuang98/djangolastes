import os, hashlib, binascii
from .models import AccountModels
from .serializers import AccountSerializer
from django.contrib.auth.hashers import make_password, check_password
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.forms.models import model_to_dict

# @permission_classes([AllowAny])
class AccountAll(APIView):
    def get(self, request):
        try:
            data = AccountModels.objects.all()
            serializer = AccountSerializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestSession(APIView):
    def get(self, request):
        username = request.session['username']
        email = request.session['email']
        return Response({"username: ": username, "email": email}, status=status.HTTP_200_OK)

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
                    # lưu session
                    request.session['username'] = data.username
                    # request.session['password'] = data.password
                    request.session['name'] = data.name
                    request.session['email'] = data.email
                    request.session['phone_number'] = data.phone_number
                    request.session['is_superuser'] = data.is_superuser
                    request.session['is_staff'] = data.is_staff
                    request.session['is_active'] = data.is_active
                    request.session['date_joined'] = data.date_joined
                    request.session['date_updated'] = data.date_updated
                    request.session.save()
                    sessionid = request.session.session_key
                    print("sign-in success")
                    return Response({"Message": "OK", "refresh_token": str(refresh), "access_token": access_token, "sessionid": sessionid}, status=status.HTTP_200_OK)
                else:
                    return Response({"Not OK"}, status=status.HTTP_404_NOT_FOUND)
            else:
                print("fail")
                return Response({"Not OK"}, status=status.HTTP_404_NOT_FOUND)
        except:
            print("except")
            return Response({"except"}, status=status.HTTP_400_BAD_REQUEST)
        
import pdb
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
             # lưu session
            request.session['username'] = data.username
            # request.session['password'] = data.password
            request.session['name'] = data.name
            request.session['email'] = data.email
            request.session['phone_number'] = data.phone_number
            request.session['is_superuser'] = data.is_superuser
            request.session['is_staff'] = data.is_staff
            request.session['is_active'] = data.is_active
            request.session['date_joined'] = data.date_joined
            request.session['date_updated'] = data.date_updated
            request.session.save()
            sessionid = request.session.session_key
            print("sign-up success")
            return Response({"Message": "OK", "refresh_token": str(refresh), "access_token": access_token}, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
