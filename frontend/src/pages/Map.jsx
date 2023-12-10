import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library

const Map = () => {
  // Specify the paths to your custom icons
  const iconUrl2 = 'https://cdn-icons-png.flaticon.com/512/3082/3082383.png';
  const iconUrl1 = 'https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/car-512.png';

  // Create the custom icons
  const userLocationIcon1 = new L.Icon({
    iconUrl: iconUrl1,
    iconSize: [50, 50],
  });

  const userLocationIcon2 = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3082/3082383.png',
    iconSize: [50, 50],
  });

  return (
    <div id="map" style={{ height: '100vh' }}>
      <MapContainer center={[19.1814807, 72.857856]} zoom={18} scrollWheelZoom={true} style={{ height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[19.1814807, 72.857856]} icon={userLocationIcon1}>
          <Popup>
            Your Vehicle Location <br />
          </Popup>
        </Marker>
        <Marker position={[19.1812, 72.858]} icon={userLocationIcon2}>
          <Popup>
            Your Current Location <br /> 
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
