from rest_framework import serializers
from .models import AccountModels
from category.serializers import CategorySerializer

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountModels
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}