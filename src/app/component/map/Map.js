'use client'
import * as React from 'react';
import Map from 'react-map-gl';
const TOKEN = process.env.MapboxAccessToken;
function MyMap() {

    return <Map
    mapLib={import('mapbox-gl')}
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={TOKEN}
  />;
  };
  export default MyMap;