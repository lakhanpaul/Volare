from django.conf.urls import url, include
from rest_framework import serializers
from .models import Website, URL

class WebsiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Website
        fields = '__all__'
        

class URLSerializer(serializers.ModelSerializer):
    class Meta:
            model = URL
            fields = '__all__'
            