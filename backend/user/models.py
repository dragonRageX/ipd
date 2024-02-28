from django.db import models
from django.contrib.gis.db import models
from .managers import UserManager
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.gis.geos import Point
# Create your models here.


class User(AbstractBaseUser):
    name = models.CharField(
        max_length=20, help_text="Enter your name", null=True, blank=True
    )
    username = models.CharField(max_length=200, unique=True)
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
        help_text="Enter your Email",
    )
    password_reset_token = models.CharField(max_length=250, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_email_verified = models.BooleanField(default=False)
    objects = UserManager()
    user_vehicle_location = models.PointField(spatial_index = True,default=None,null=True,blank=True)
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin

    def is_verified(self):
        return self.is_email_verified
    
    def get_vehicle_location(self):
        return self.user_vehicle_location

    def update_vehicle_location(self, lon, lat):
        self.user_vehicle_location = Point(lon, lat, srid=4326)
        self.save()
