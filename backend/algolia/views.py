from django.shortcuts import render
from algolia.models import Website
from algolia.serializers import WebsiteSerializer
from algoliasearch_django import raw_search
from rest_framework.decorators import api_view
from rest_framework.views import APIView, View
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView
# this method searchs the algolia index and returns a raw json response
# it traverses through the models specified and uses the query paramater to search

# TODO possibly may need to stringify the query in the raw_search function
# @api_view(['GET', 'POST',])
# def searchAlgoliaIndex(Model, query, params):
#     params = { "hitsPerPage": 5 }
#     response = raw_search(Model, query, params)
#     return response

import logging

log_format = "%(asctime)s::%(levelname)s::%(name)s::"\
             "%(filename)s::%(lineno)d::%(message)s"
logging.basicConfig(filename='D:/Documents/Volare/backend/logs/views.log', level='DEBUG', format=log_format)

class searchAlgoliaIndexClass(ListAPIView):
    """
    View to search the algolia index comprised of the models in the database.

    """

    
    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Add in the query passed in via the url
        context['query'] = self.query
        logging.debug("the query context is {},  and the kwargs are {}, the context returned is {}".format(self.query, self.kwargs, context) )
        return context

    
    # # this defines the algolia paramaters needed to use their search function
    # params = { "hitsPerPage": 5 }
    # # this returns a raw json object, where the first paramater is the model, the second is the query and the third are params
    # response = raw_search(Website, super().self.context['query'], super.params)

    queryset= Website.objects.all()

    serializer_class = WebsiteSerializer

class searchAlgoliaIndexNotList(View):
    """
    View to search the algolia index comprised of the models in the database.

    """


    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Add in the query passed in via the url
        context['query'] = self.query
        logging.debug("the query context is {},  and the kwargs are {}, the context returned is {}".format(self.query, self.kwargs, context) )
        response = raw_search(Website, self.context['query'])

        return context, response



    # this defines the algolia paramaters needed to use their search function
    params = { "hitsPerPage": 5 }
    # this returns a raw json object, where the first paramater is the model, the second is the query and the third are params
    # response = raw_search(Website, context['query'], params)

class searchAlgoliaTesting(ListAPIView):
    
    serializer_class=WebsiteSerializer
    lookup_url_kwarg = "query"

    def get_queryset(self):
        query = self.kwargs.get(self.lookup_url_kwarg)
        websites = raw_search(Website, query)
        return websites
       


# class CommentList(generics.ListAPIView):    
#     serializer_class = CommentSerializer
#     permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
#     lookup_url_kwarg = "uid"

#     def get_queryset(self):
#         uid = self.kwargs.get(self.lookup_url_kwarg)
#         comments = Comment.objects.filter(article=uid)
#         return comments
