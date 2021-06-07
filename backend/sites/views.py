from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Website, URL
from .serializers import WebsiteSerializer, URLSerializer

# made to list all of the websites in the database
class WebsiteListView(ListAPIView):
    # orders the blogs by the date created (most recent first)
    # queryset is needed as listapi is being used
    queryset = Website.objects.order_by('-date_created')
    serializer_class = WebsiteSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )



