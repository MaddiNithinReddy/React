import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '700px'
};

const center = {
  lat: 17.385044, // Example: Hyderabad
  lng: 78.486671
};

function MyMapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBOcjReqs4QiqdlrooLuAD-1tttTj-oPF8" libraries={['places', 'geometry', 'drawing']}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMapComponent;
