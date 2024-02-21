from django.urls import path,include
from .views import *

urlpatterns = [
    path('loadcsv/',LoadCSV.as_view(),name='list-room'),
    path('near_loc/',NearestLocationView.as_view(), name="Find-near"),
    path('checkzone/',CheckParkingZoneView.as_view(),name='check-zone'),
    path('addloc/',LocationByUserAPIView.as_view(),name='add-loc'),
    path('getcoordinates/',GetLocationView.as_view(),name='get-coordinates')
]
