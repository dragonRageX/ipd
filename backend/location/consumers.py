import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.gis.geos import Point

class SensorConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        lon = data['lon']
        lat = data['lat']
        user_coordinates = Point(lon, lat, srid=4326)
        
        # Store coordinates in the channel layer
        await self.channel_layer.group_add(
            "sensors_group",
            self.channel_name
        )
        await self.channel_layer.group_send(
            "sensors_group",
            {
                'type': 'send_sensor_data',
                'user_coordinates': user_coordinates.wkt,
            }
        )