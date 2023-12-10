from django.forms import FileField
from rest_framework import serializers
from django.contrib.gis.geos import Point
from .models import LocationByUser


class LoadCSVSerializer(serializers.Serializer):
    csv = serializers.FilePathField(path='csv/')
    category = serializers.CharField()
    
    
class LocationByUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocationByUser
        fields = "__all__"
    def create(self, validated_data):
        coordinates_data = validated_data.pop('coordinates')
        validated_data['coordinates'] = Point(coordinates_data)
        return LocationByUser.objects.create(**validated_data)

class LocationSerializer(serializers.Serializer):
    name = serializers.CharField()
    coordinates = serializers.SerializerMethodField()
    distance_km = serializers.FloatField()

    def get_coordinates(self, instance):
        return instance['instance'].coordinates.coords

    def to_representation(self, instance):
        data = {
            'name': instance['instance'].name,
            'coordinates': self.get_coordinates(instance),
            'distance_km': self.fields['distance_km'].to_representation(instance['distance_km']),
        }

        return data