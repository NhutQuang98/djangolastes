from rest_framework import serializers
from .models import CategoryModels
from account.models import AccountModels

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModels
        fields = '__all__'


class AccountNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountModels
        fields = ['name']


class CategoryAccountSerializer(serializers.ModelSerializer):
    category_account = AccountNameSerializer() # Thêm Serializer của AccountModels vào CategorySerializer

    class Meta:
        model = CategoryModels
        fields = ['category_id', 'category_name', 'category_date_submit', 'category_date_updated', 'category_account_id', 'category_account'] # Thêm field mới category_account