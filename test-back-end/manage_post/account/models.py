from django.db import models
from django.contrib.auth.models import AbstractUser

class AccountModels(AbstractUser):
     # Delete not use field
     last_login = None
     first_name = None
     last_name = None

     id = models.AutoField(primary_key=True, db_column='id')
     username = models.CharField(unique=True, db_column='username')
     password = models.CharField(db_column='password')
     name = models.CharField(db_column='name')
     email = models.EmailField(db_column='email', unique=True)
     phone_number = models.CharField(db_column='phone_number')
     is_superuser = models.BooleanField(default=False, db_column='is_superuser')
     is_staff = models.BooleanField(default=False, db_column='is_staff')
     is_active = models.BooleanField(default=True, db_column='is_active')
     date_joined = models.DateTimeField(auto_now_add=True, db_column='date_joined')
     date_updated = models.DateTimeField(auto_now=True, db_column='date_updated')

     USERNAME_FIELD = 'username'
     REQUIRED_FIELDS = ['email', 'name', 'phone_number']