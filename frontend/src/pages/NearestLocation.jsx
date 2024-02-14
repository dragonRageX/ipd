import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

const NearestLocation = () => {
  const [locations, setLocations] = useState([]);

  //   useEffect(() => {
  //     // Replace 'http://127.0.0.1:8000/location/near_loc/' with the actual endpoint
  //     // and update the body with the desired lat, lon, and spot values
  //     axios.post('http://127.0.0.1:8000/location/near_loc/', {
  //       lat: 19.182381002086892,
  //       lon: 72.85872142939337,
  //       spot: 'parking_spot',
  //     })
  //       .then((response) => setLocations(response.data))
  //       .catch((error) => console.error('Error fetching data:', error));
  //     console.log(locations)
  //   }, []);
  useEffect(() => {
    console.log("useEffect started");
    const fetchData = async () => {
      try {
        // Replace 'http://127.0.0.1:8000/location/near_loc/' with the actual endpoint
        // and update the body with the desired lat, lon, and spot values
        const response = await axios.post(
          "http://127.0.0.1:8000/location/near_loc/",
          {
            lat: 19.1658299,
            lon: 72.8515051,
            spot: "parking_spot",
          }
        );
        console.log("Response data:", response.data);

        // Use a functional update to ensure you're working with the latest state
        // setLocations((prevLocations) => {
        //   console.log("Previous locations state:", prevLocations);
        //   return [...prevLocations, ...response.data];
        // });
        setLocations(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log(locations);
  }, []);

  const customIcon = new L.Icon({
    iconUrl:
      "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/car-512.png",
    iconSize: [30, 30],
  });

  const userLocationIcon2 = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3082/3082383.png',
    iconSize: [30, 30],
  });

  const checklocation = (location) => {
    console.log("checking", location);
  };
  return (
    <div id="map" style={{ height: "100vh" }}>
      <MapContainer
        center={[19.1658299, 72.8515051]}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[19.1658299, 72.8515051]} icon={userLocationIcon2}>
          <Popup>
            Your Current Location <br /> 
          </Popup>
        </Marker>
        {console.log("Locations:", locations)}
        {/* Dynamically render markers for each location received from the API response */}
        {locations.map((location, index) => (
          <Marker key={index} position={[location.coordinates[1], location.coordinates[0]]} icon={customIcon}>
            checklocation(location)
            <Popup>
              {location.name} <br />
              Distance: {location.distance_km} km <br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default NearestLocation;
