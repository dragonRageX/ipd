from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from .loadcsv import read_csv, import_csv_data
from .serializers import (
    LoadCSVSerializer,
    LocationSerializer,
    LocationByUserSerializer,
    GetLocationSerializer,
)
from django.contrib.gis.geos import Point
from django.contrib.gis.db.models import functions
from django.contrib.gis.measure import Distance
from .models import Location2, LocationByUser
from rest_framework import status
from django.core.cache import cache
from django.contrib.gis.geos import GEOSGeometry
from django.contrib.sessions.models import Session
from django.contrib.auth import get_user_model
import geocoder
import websockets
import json

User = get_user_model()


# view to load the dataset in database through CSV
class LoadCSV(GenericAPIView):
    serializer_class = LoadCSVSerializer

    def post(self, request):
        print(request.data["csv"])
        import_csv_data(request.data["csv"], request.data["category"])
        return Response({"message": "hello"})


# get the data of nearest location based on the spot(bus stop, parking spot, no parking spot)
class NearestLocationView(APIView):
    def post(self, request):
        try:
            spot = request.data["spot"]
            # code get data from senors
            user = User.objects.get(id=1)
            user_vehicle_coordinates = user.get_vehicle_location()
            user_location = geocoder.ip("me").latlng
            user_coordinates_gps = Point(
                user_location[1], user_location[0], srid=4326
            ) 
            nearest_locations = (
                Location2.objects.filter(category=spot)
                .annotate(
                    distance=functions.Distance("coordinates", user_vehicle_coordinates)
                )
                .order_by("distance")[:20]
            )
            print(
                user_vehicle_coordinates,
                "vehicle_senors",
                user_coordinates_gps,
                "gps wala",
            )
            unique_coordinates = set()  # To track unique coordinates
            unique_nearest_locations = []  # To store distinct records
            for location in nearest_locations:
                coordinates_tuple = tuple(location.coordinates.coords)
                if coordinates_tuple not in unique_coordinates:
                    unique_coordinates.add(coordinates_tuple)
                    distance_km = location.distance.km
                    serialized_data = {"instance": location, "distance_km": distance_km}
                    unique_nearest_locations.append(serialized_data)
            if unique_nearest_locations:
                serializer = LocationSerializer(unique_nearest_locations, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(
                    {"detail": "No locations found"}, status=status.HTTP_404_NOT_FOUND
                )
        except Exception as e:
            print(e)
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


# view to get location from sensors(iot)
class GetLocationThroughSensorView(APIView):
    def post(self, request):
        try:
            lon = float(request.data["lon"])
            lat = float(request.data["lat"])
            user = User.objects.get(id=1)
            print("User Coordinates before update:", user.get_vehicle_location())
            user.update_vehicle_location(lon, lat)
            print("User Coordinates after update:", user.get_vehicle_location())
            serializer = GetLocationSerializer(data=request.data)
            if serializer.is_valid():
                return Response(
                    {
                        "message": "co_ordinates received",
                        "data": serializer.validated_data,
                    },
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {"message": "error", "error": serializer.errors},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        except Exception as e:
            print(e)
            return Response(
                {"message": "Expection error", "error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


# to check whether user is in parking zone or not
class CheckParkingZoneView(APIView):
    def post(self, request):
        lon = float(request.data["lon"])
        lat = float(request.data["lat"])
        user_coordinates = Point(lon, lat, srid=4326)
        max_distance_meters = 8
        # Check if the user's location is within the no parking zone
        in_no_parking_zone = Location2.objects.filter(
            category="bus_stop",
            coordinates__distance_lte=(
                user_coordinates,
                Distance(m=max_distance_meters),
            ),
        ).exists()

        if in_no_parking_zone:
            return Response({"status": "In no parking zone"}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "in parking zone"}, status=status.HTTP_200_OK)


# data from user if user has a location not in  database add it to db and then get info about that place
class LocationByUserAPIView(GenericAPIView):
    queryset = LocationByUser.objects.all()
    serializer_class = LocationByUserSerializer

    def get(self, request):
        locations = LocationByUser.objects.all()
        serializer = LocationByUserSerializer(locations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = LocationByUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
