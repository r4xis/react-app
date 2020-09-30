import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "../../images/icon-location.svg";

let Icon = L.icon({
  iconUrl: icon,
  iconAnchor: [20, 55],
});
const ComponentMap = (props) => {
  return props.data.location !== undefined ? (
    <Map
      center={[props.data.location.lat, props.data.location.lng]}
      zoom={13}
      zoomControl={false}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[props.data.location.lat, props.data.location.lng]}
        icon={Icon}
      />
    </Map>
  ) : null;
};

export default ComponentMap;
