# from django.db import models

# class CategoryModels(models.Model):
#     category_id = models.AutoField(primary_key=True,  db_column='category_id')
#     category_name = models.CharField(db_column='category_name')
#     category_parent_id = models.IntegerField(null=True, blank=True, db_column='category_parent_id')

#     def __str__(self):
#         return self