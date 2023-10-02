from django.urls import path,include
from .views import *

urlpatterns = [
    path('loadcsv/',LoadCSV.as_view(),name='list-room'),
]
