"use client";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map of your chosen location"
      />
    </MapContainer>
  );
};

export default MapComponent;
