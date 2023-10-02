from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .loadcsv import read_csv, import_csv_data
# Create your views here.
class LoadCSV(APIView):
    
    def get(self,request):
        import_csv_data('csv/bus_stop_data.csv','bus_stop')
        return Response({
            'message':'hello'
        })