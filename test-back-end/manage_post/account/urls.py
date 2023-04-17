from django.urls import path
from .views import SignIn, SignUp, AccountAll, TestSession

urlpatterns = [
    path('api/sign-in/', SignIn.as_view(), name='sign-in-url'),
    path('api/sign-up/', SignUp.as_view(), name='sign-up-url'),
    path('api/account-all/', AccountAll.as_view(), name='account-all-url'),
    path('api/testsession/', TestSession.as_view(), name='testsession-url'),
]
