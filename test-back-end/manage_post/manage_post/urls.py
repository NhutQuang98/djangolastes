from django.contrib import admin
from django.urls import path
from account.views import AccountLogin, GetSession
# from category.views import CategoryViews
# from post.views import PostViews

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('account/', AccountViews.as_view(), name='account-url'),
    path('account-login/', AccountLogin.as_view(), name='account-login-url'),
    path('get-session/', GetSession.as_view(), name='get-session-url'),
    # path('category/', CategoryViews.as_view(), name='category-url'),
    # path('post/', PostViews.as_view(), name='post-url'),
]
