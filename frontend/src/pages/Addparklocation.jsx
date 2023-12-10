import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom'; 

const AddLocationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    coordinates: '',
  });

  const handleMapClick = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      coordinates: e.latlng,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/location/addloc/', {
        name: formData.name,
        category: formData.category,
        coordinates: [formData.coordinates.lat,formData.coordinates.lng],
        user: 1,
      });

      // Handle the response as needed
      if (response.status === 200) {
        // Successfully added location
        console.log('Location added successfully');
        navigate.push('/map');
      } else {
        // Handle errors
        console.error('Error adding location');
      }
    } catch (error) { 
      // Handle errors from the Axios request
      console.error('Error making API request:', error.message);
    }
  };

  const iconUrl2 = 'https://cdn-icons-png.flaticon.com/512/3082/3082383.png';
  const userLocationIcon2 = new L.Icon({
    iconUrl: iconUrl2,
    iconSize: [50, 50],
  });

  const MapClickHandler = () => {
    const map = useMapEvents({
      click: handleMapClick,
    });

    return null;
  };

  return (
    <div>
      <h1>Add Location</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
          />
        </label>
      </div>
      <div>
        <label>
          Category:
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, category: e.target.value }))}
          />
        </label>
      </div>
      <MapContainer center={[19.182381002086892,72.85872142939337,]} zoom={20} scrollWheelZoom={true} style={{ height: '600px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {formData.coordinates && (
          <Marker position={formData.coordinates} icon={userLocationIcon2}>
            <Popup>
              <div>
                <p>Name: {formData.name}</p>
                <p>Category: {formData.category}</p>
              </div>
            </Popup>
          </Marker>
        )}
        <MapClickHandler />
      </MapContainer>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddLocationPage;
