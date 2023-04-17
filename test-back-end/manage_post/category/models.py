from django.db import models
from account.models import AccountModels

class CategoryModels(models.Model):
    category_id = models.AutoField(primary_key=True,  db_column='category_id')
    category_name = models.CharField(unique=True, db_column='category_name')
    category_date_submit = models.DateTimeField(auto_now_add=True, db_column='category_date_submit')
    category_date_updated = models.DateTimeField(auto_now=True, db_column='category_date_updated')
    category_account_id = models.ForeignKey(AccountModels, on_delete=models.CASCADE, default=1, related_name='categories', db_column='category_account_id')
    # category_parent_id = models.IntegerField(null=True, blank=True, db_column='category_parent_id')