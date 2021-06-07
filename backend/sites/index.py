# index.py

import algoliasearch_django as algoliasearch

from .models import Website

algoliasearch.register(Website)
