from django.db.models import query
from django.urls import path, re_path
from .views import  searchAlgoliaIndexClass, searchAlgoliaIndexNotList, searchAlgoliaTesting

urlpatterns = [
    path('<str:query>', searchAlgoliaIndexClass.as_view()),
    path('notlist/<str:query>', searchAlgoliaIndexNotList.as_view()),
    path('/hello/<str:query>', searchAlgoliaTesting.as_view(),),
    re_path(r'^drinks/(?P<query>\D+)/', searchAlgoliaTesting.as_view())
]
