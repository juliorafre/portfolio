'use client';
import React, { useEffect, useRef } from 'react';
import Map, { NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map>(null);

  /* useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoianVsaW9yYWZyZSIsImEiOiJjbTN5czZ1ZDAxMzdlMnZteDllajYxdW0yIn0.1vNEX4Jx_tDzib1bB4LOSQ';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      center: [-0.126326, 51.533582],
      zoom: 15.27,
      pitch: 42,
      bearing: -50,
      style: 'mapbox://styles/mapbox/standard',
      minZoom: 15,
      maxZoom: 16,
    });

    mapRef.current.on('style.load', () => {
      // set the light preset to be in dusk mode.
      mapRef.current.setConfigProperty('basemap', 'lightPreset', 'dusk');

      // add a geojson source with a polygon to be used in the clip layer.
      mapRef.current.addSource('eraser', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                coordinates: [
                  [
                    [-0.12573, 51.53222],
                    [-0.12458, 51.53219],
                    [-0.12358, 51.53492],
                    [-0.12701, 51.53391],
                    [-0.12573, 51.53222],
                  ],
                ],
                type: 'Polygon',
              },
            },
          ],
        },
      });

      // add a geojson source which specifies the custom model to be used by the model layer.
      mapRef.current.addSource('model', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {
            'model-uri': 'https://docs.mapbox.com/mapbox-gl-js/assets/tower.glb',
          },
          geometry: {
            coordinates: [-0.12501974, 51.5332374],
            type: 'Point',
          },
        },
      });

      // add the clip layer and configure it to also remove symbols and trees.
      // `clip-layer-scope` layout property is used to specify that only models from the Mapbox Standard Style should be clipped.
      // this will prevent the newly added model from getting clipped.
      mapRef.current.addLayer({
        id: 'eraser',
        type: 'clip',
        source: 'eraser',
        layout: {
          // specify the layer types to be removed by this clip layer
          'clip-layer-types': ['symbol', 'model'],
          'clip-layer-scope': ['basemap'],
        },
      });

      // add the model layer and specify the appropriate `slot` to ensure the symbols are rendered correctly.
      mapRef.current.addLayer({
        id: 'tower',
        type: 'model',
        slot: 'middle',
        source: 'model',
        minzoom: 15,
        layout: {
          'model-id': ['get', 'model-uri'],
        },
        paint: {
          'model-opacity': 1,
          'model-rotation': [0.0, 0.0, 35.0],
          'model-scale': [0.8, 0.8, 1.2],
          'model-color-mix-intensity': 0,
          'model-cast-shadows': true,
          'model-emissive-strength': 0.8,
        },
      });
    });
  }, []); */

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
