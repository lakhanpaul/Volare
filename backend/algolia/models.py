from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
# Create your models here.


class Website(models.Model):
    title = models.CharField(max_length=200, blank=False, default='', null=True)
    description = models.TextField(max_length=300, blank=False, default='',null=True)
    date_created = models.DateTimeField(default=datetime.now , blank=True, null=True)
    icon = models.ImageField(upload_to = 'icons/%Y/%m/%d', blank=False ,default='', null=True)
    url = models.URLField(max_length=200)

    def __str__(self):
        return self.title