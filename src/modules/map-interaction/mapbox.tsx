'use client';
import React from 'react';
import Map, { NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = () => {
  return (
    <Map
      reuseMaps
      mapboxAccessToken="pk.eyJ1IjoianVsaW9yYWZyZSIsImEiOiJjbTc2ZjYxYXEwdmJ2MmtweHM0ODF5eHJyIn0.78hxX8FyO2jthSyIMk1fkw"
      initialViewState={{
        zoom: 11.133496816795057,
        bearing: 10.399999999999636,
        latitude: 40.71123813798084,
        longitude: -74.00710684744715,
        padding: { top: 0, bottom: 0, left: 0, right: 0 },
        pitch: 0,
      }}
      onMove={(e) => {
        console.log(e.viewState);
      }}
      style={{ width: 300, height: 300 }}
      mapStyle="mapbox://styles/mapbox/standard"
    >
      <NavigationControl position="top-left" />
    </Map>
  );
};

/* 
Amsterdan
 initialViewState={{
        longitude: 4.89545,
        latitude: 52.38282,
        zoom: 8,
      }}
      
  mapStyle="mapbox://styles/mapbox/standard"
      mapStyle="mapbox://styles/juliorafre/cm76r6ued00k601s3ay90huv2"
 */

export default Mapbox;
