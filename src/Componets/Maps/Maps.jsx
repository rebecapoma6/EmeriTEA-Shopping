import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";

function Mapa() {
  const locations = [
    {
      position: [38.9086113, -6.3561497],
      info: "Travesía Luis Álvarez Lencero, 6 Mérida. Badajoz",
    },
    // Agrega más ubicaciones aquí
  ];
  return (
    <>
      <div className="ubicacion">
        <div className="map-container">
          <div className="ubicacion-text">
            <h1>Encuéntranos en ⬇️ </h1>
            <p>Travesía Luis Álvarez Lencero, 6 06800 Mérida, Badajoz.</p>
          </div>

          <div className="Mapa">
            <MapContainer
              center={locations[0].position}
              zoom={16}
              style={{
                height: "60vh",
                width: "100%",
                marginTop: "10%",
                //   marginLeft: "25%",
                //   marginRight: "25%",
                marginBottom: "10%",
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {locations.map((location, index) => (
                <Marker key={index} position={location.position}>
                  <Popup>{location.info}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mapa;
