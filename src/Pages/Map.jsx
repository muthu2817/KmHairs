import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const MapComponent = ({lat,long}) => {
  
    const latitude = parseFloat(lat);
    const longitude = parseFloat(long);

  // Function to open location in a map application
  const openInApp = () => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
    console.log(props)
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
     
      {/* Map */}
      <div style={{ width: "100%", height: "400px", borderRadius:"48px" }}>
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              Visit us at this location! <br />
              <button onClick={openInApp} style={{ cursor: "pointer", background: "blue", color: "white", border: "none", padding: "5px" }}>
                Open in App
              </button>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Open in App Button */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={openInApp}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Open in App
        </button>
      </div>
    </div>
  );
};

export default MapComponent;
