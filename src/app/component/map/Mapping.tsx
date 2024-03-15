'use client'

import 'mapbox-gl/dist/mapbox-gl.css';
import * as React from 'react';
import Map, {NavigationControl,  
    GeolocateControl,
    FullscreenControl,
  ScaleControl, } from 'react-map-gl';

function MyMap({Token}) {
  return( <Map
    mapboxAccessToken={Token}
    mapLib={import('mapbox-gl')}
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: '100%', height: '100%'}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    
    <GeolocateControl />
    <NavigationControl />
  </Map>);

}

  export default MyMap;


