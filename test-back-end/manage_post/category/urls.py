from django.urls import path
from .views import CategoryDefault, CategorySearch, CategoryDetele

urlpatterns = [
    # get all
    path('api/category-search/', CategoryDefault.as_view(), name='category-all-url'),
    # search
    path('api/category-search/<str:search_key>', CategorySearch.as_view(), name='category-search-url'),
    # insert
    path('api/category-add/', CategoryDefault.as_view(), name='category-add-url'),
    # delete
    path('api/category-delete/<int:category_id>', CategoryDetele.as_view(), name='category-delete-url'),
]
