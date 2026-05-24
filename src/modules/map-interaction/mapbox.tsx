"use client";
import { Map as MapboxMap, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

type MapboxProps = {
  onLoad?: () => void;
};

const Mapbox = ({ onLoad }: MapboxProps) => {
  return (
    <MapboxMap
      initialViewState={{
        zoom: 11.133_496_816_795_057,
        bearing: 10.399_999_999_999_636,
        latitude: 40.711_238_137_980_84,
        longitude: -74.007_106_847_447_15,
        padding: { top: 0, bottom: 0, left: 0, right: 0 },
        pitch: 0,
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      mapStyle="mapbox://styles/mapbox/standard"
      onIdle={() => {
        console.log("map idle");
      }}
      onLoad={() => {
        console.log("map loaded");
        onLoad?.();
      }}
      onMove={(e) => {
        console.log(e.viewState);
      }}
      onRemove={() => {
        console.log("map removed");
      }}
      onRender={() => {
        console.log("map rendered");
      }}
      reuseMaps
      style={{ width: 300, height: 300 }}
    >
      <NavigationControl position="top-left" />
    </MapboxMap>
  );
};

export default Mapbox;
