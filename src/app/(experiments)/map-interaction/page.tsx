"use client";

import MapInteraction from "@/modules/map-interaction/map-interaction";

const MapInteractionScreen = () => {
  return (
    <div className="h-full">
      <link rel="preconnect" href="https://api.mapbox.com" />
      <link rel="dns-prefetch" href="https://api.mapbox.com" />
      <MapInteraction />
    </div>
  );
};

export default MapInteractionScreen;
