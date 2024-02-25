
# class NearestLocationView(APIView):
#     def get(self, request):
#         # Get the latitude and longitude from the request
#         lat = float(request.query_params.get('lat'))
#         lon = float(request.query_params.get('lon'))
#         user_coordinates = (lat, lon)

#         # Calculate the distance to each location and find the nearest one
#         locations = Location.objects.filter(category='bus_stop')
#         nearest_location = None
#         min_distance = None

#         for location in locations:
#             print(location)
#             location_coordinates = (float(location.latitude), float(location.longitude))
#             distance = geodesic(user_coordinates, location_coordinates).kilometers

#             if nearest_location is None or distance < min_distance:
#                 nearest_location = location
#                 min_distance = distance
#         print(nearest_location,'<----- location')
#         # Serialize the nearest location and return it as a response
#         serializer = LocationSerializer([nearest_location,min_distance])
#         print(serializer.data)
#         return Response(serializer.data)

# class NearestLocationView(APIView):
#     def post(self, request):
#         print(request.data['lat'])
#         # Get the latitude and longitude from the request
#         lat = float(request.data['lat'])
#         lon = float(request.data['lon'])
#         spot = request.data['spot']
#         print(lat, lon)
#         user_coordinates = Point(lon, lat, srid=4326)  # Assuming WGS 84 coordinate system
#         nearest_locations = Location2.objects.filter(category=spot).annotate(
#             distance=functions.Distance('coordinates', user_coordinates)
#         ).order_by('distance')[:10]

#         if nearest_locations:
#             # Create a list to store serialized data for each location
#             serialized_data_list = []
#             for location in nearest_locations:
#                 # Calculate the distance in kilometers for each location
#                 distance_km = location.distance.km
#                 # Create a dictionary containing both the Location2 instance and the distance
#                 serialized_data = {'instance': location, 'distance_km': distance_km}
#                 serialized_data_list.append(serialized_data)


#             # Serialize the data and return it as a response
#             serializer = LocationSerializer(serialized_data_list, many=True)
#             return Response(serializer.data)
#         else:
#             # Handle the case when no nearest location is found
#             return Response({'detail': 'No locations found'}, status=404)