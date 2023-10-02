from django.db import models

# Create your models here.
class Location(models.Model):
    name = models.CharField(max_length=300)
    latitude = models.CharField(max_length=300)
    longitude = models.CharField(max_length=300)
    category = models.CharField(max_length=300)
    
    def __str__(self) -> str:
        return str(self.name)