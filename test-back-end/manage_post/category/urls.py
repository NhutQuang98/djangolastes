from django.urls import path
from .views import CategoryDefault, CategorySearch, CategorySearchById

urlpatterns = [
    # get all
    path('api/category-search/', CategoryDefault.as_view(), name='category-all-url'),
    # search by category_name
    path('api/category-search/<str:search_key>', CategorySearch.as_view(), name='category-search-by-name-url'),
    # search by id
    path('api/category-search-by-id/<int:category_id>/', CategorySearchById.as_view(), name='category-search-by-id-url'),
    # insert
    path('api/category-add/', CategoryDefault.as_view(), name='category-add-url'),
    # delete
    path('api/category-delete/<int:category_id>', CategoryDefault.as_view(), name='category-delete-url'),
    # update
    path('api/category-update/<int:category_id>/', CategoryDefault.as_view(), name='category-update-url'),
]
