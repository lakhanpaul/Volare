
# Create your tests here.
from django.test import TestCase, Client
from django.urls import reverse

class TestAlgoliaSearch(TestCase):
    """
    This class contains tests that convert measurements from one
    unit of measurement to another.
    """ 
    def setUp(self):
        """
        This method runs before the execution of each test case.
        """
        self.client = Client()
        self.url = reverse("length:convert")