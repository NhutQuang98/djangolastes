# from django.db import models
# from category.models import CategoryModels
# from account.models import AccountModels


# class PostModels(models.Model):
#     post_id = models.AutoField(primary_key=True, db_column='post_id')
#     title = models.CharField(db_column='title')
#     content = models.TextField(db_column='content')
#     amount_view = models.IntegerField(default=0, db_column='amount_view')
#     submit_date = models.DateTimeField(auto_now_add=True, db_column='submit_date')
#     update_last_date = models.DateTimeField(auto_now=True, db_column='update_last_date')
#     account_id = models.ForeignKey(AccountModels, on_delete=models.CASCADE, db_column='account_id')
#     category_id = models.ForeignKey(CategoryModels, on_delete=models.CASCADE, db_column='category_id')

#     def __str__(self):
#         return self