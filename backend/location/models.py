from django.db import models

# Create your models here.
class Location(models.Model):
    name = models.CharField(max_length=300)
    latitude = models.FloatField()
    longitude = models.FloatField()
    category = models.CharField(max_length=300)
    
    def __str__(self) -> str:
        return str(self.name)