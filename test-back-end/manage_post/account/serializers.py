from rest_framework import serializers
from .models import UserModels
from .models import UserModels
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModels
        fields = '__all__'

# class TokenSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserModels
#         fields = ('phone_number')