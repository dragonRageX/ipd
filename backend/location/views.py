from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from .loadcsv import read_csv, import_csv_data
from .serializers import LoadCSVSerializer
# Create your views here.
class LoadCSV(GenericAPIView):
    serializer_class = LoadCSVSerializer
    def post(self,request):
        print(request.data['csv'])
        import_csv_data(request.data['csv'],request.data['category'])
        return Response({
            'message':'hello'
        })