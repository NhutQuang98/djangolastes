from django.db import models
from django.contrib.auth.models import AbstractUser

class UserModels(AbstractUser):
    phone_number = models.CharField(max_length=20, blank=True)
    update_date = models.DateTimeField(auto_now=True, db_column='update_date')

    # def __str__(self):
    #     return self