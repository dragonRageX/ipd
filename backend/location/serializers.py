from django.forms import FileField
from rest_framework import serializers


class LoadCSVSerializer(serializers.Serializer):
    csv = serializers.FilePathField(path='csv/')
    category = serializers.CharField()
    