from django.db import models
from account.models import AccountModels

class CategoryModels(models.Model):
    category_id = models.AutoField(primary_key=True,  db_column='category_id')
    category_name = models.CharField(db_column='category_name')
    # category_parent_id = models.IntegerField(null=True, blank=True, db_column='category_parent_id')
    # account_id_create = models.ForeignKey(AccountModels, on_delete=models.CASCADE, db_column='account_id_create')