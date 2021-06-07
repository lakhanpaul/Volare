from django.db.models import query
from django.urls import path, re_path
from .views import  WebsiteAPIView



urlpatterns = [
    path('website/', WebsiteAPIView.as_view(),) #any path that hits website will display the website api
]
