from django.db import models
from django.contrib.gis.db import models
from user.models import User


class Location(models.Model):
    name = models.CharField(max_length=300)
    latitude = models.FloatField()
    longitude = models.FloatField()
    category = models.CharField(max_length=300)
    
    def __str__(self) -> str:
        return str(self.name)

class Location2(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    coordinates = models.PointField(spatial_index = True)

    def __str__(self):
        return self.name
    
class LocationByUser(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    coordinates = models.PointField(spatial_index = True)
    
    def __str__(self):
        return self.name+ str(self.user)