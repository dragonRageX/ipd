import csv
import os
from .models import Location2
from django.contrib.gis.geos import Point

def read_csv(filename):
    data = []
    filepath = os.path.join(filename).replace("\\", "/")
    with open(filepath, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
            
    print(data)
    return data

# def import_csv_data(filename,cats):
#     data = read_csv(filename)
#     for row in data:
#         location = Location(
#             longitude=float(row['x']),
#             latitude=float(row['y']),
#             name=row['Name'],
#             category=cats
#         )
#         location.save()

def import_csv_data(filename, cats):
    data = read_csv(filename)
    for row in data:
        # Create a Point instance with the coordinates
        coordinates = Point(float(row['x']),float(row['y']), srid=4326)  # Assuming WGS 84 coordinate system

        # Create and save the Location instance
        location = Location2(
            coordinates=coordinates,
            name=row['Name'],
            category=cats
        )
        location.save()
# print(read_csv('mumbai_parking_2(1).csv'))