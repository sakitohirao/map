import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';
import './App.css';

L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: shadow,
});

function MyComponent() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null;
}

function MyMap() {
  const position = [35.681236, 139.767125];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>ここが東京駅です！</Popup>
      </Marker>
      <MyComponent />
    </MapContainer>
  );
}


export default MyMap;
