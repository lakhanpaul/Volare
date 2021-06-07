# index.py


from .models import Website
from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register


@register(Website)
class WebsiteIndex(AlgoliaIndex):
    settings = {'searchableAttributes': ['title','description', 'url',]}
    index_name = 'Opportunity Websites'