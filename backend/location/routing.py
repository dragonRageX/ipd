from django.urls import re_path, path

from .consumers import SensorConsumer

websocket_urlpatterns = [
    path("ws/location/$", SensorConsumer.as_asgi()),
]
