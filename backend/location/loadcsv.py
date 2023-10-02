import csv
import os
from .models import Location

def read_csv(filename):
    data = []
    filepath = os.path.join(filename).replace("\\", "/")
    with open(filepath, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
            
    print(data)
    return data

def import_csv_data(filename,cats):
    data = read_csv(filename)
    for row in data:
        location = Location(
            longitude=float(row['x']),
            latitude=float(row['y']),
            name=row['Name'],
            category=cats
        )
        location.save()
        
# print(read_csv('mumbai_parking_2(1).csv'))