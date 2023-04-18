import { MAP_KEY } from "@/config/env";
import React, { useState, useEffect, useMemo, useRef } from "react";
import MyLocationButton from "./MyLocationButton";
import axios from "axios";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from
import "leaflet-defaulticon-compatibility";

const ChangeView = ({ center, zoom }: any) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const MapPicker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [address, setAddress] = useState("");

  // get current location
  const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    getMyLocation();
  }, []);

  // get address from lat lng
  useEffect(() => {
    if (location.lat === 0 && location.lng === 0) return;
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP_KEY}`;
    const fetchAddress = async () => {
      setIsLoading(true);
      await axios.get(URL).then((res) => {
        // setAddress(res.data.results[0].formatted_address);
      });
      setIsLoading(false);
    };
    fetchAddress();
  }, [location]);

  const markerRef = useRef<any>(null);
  // marker change position
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setLocation({
            lat: marker.getLatLng().lat,
            lng: marker.getLatLng().lng,
          });
        }
      },
    }),
    []
  );

  return (
    <div className="flex h-screen flex-col">
      {true ? (
        <div className="flex-1 relative">
          <MapContainer className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              ref={markerRef}
              eventHandlers={eventHandlers}
              position={[location.lat, location.lng]}
              draggable
            />
            {location.lat !== 0 && location.lng !== 0 && (
              <ChangeView center={[location.lat, location.lng]} zoom={20} />
            )}
          </MapContainer>
          <MyLocationButton onClick={getMyLocation} />
        </div>
      ) : (
        <div className="animate-pulse flex-1">
          <div className="h-full w-full bg-gray-200" />
        </div>
      )}
      <div className="flex-1 p-5">
        <h1 className="font-bold text-lg">Pilih Alamat Pengantaran</h1>
        <div className="mt-5">
          {!isLoading ? (
            <p>{address}</p>
          ) : (
            <div className="animate-pulse">
              <div className="h-4 w-full bg-gray-200 rounded-sm"></div>
              <div className="h-4 w-4/12 mt-2 rounded-sm bg-gray-200"></div>
            </div>
          )}
        </div>
      </div>
      <div className="footer-container">
        <button className="btn btn-primary w-full">Konfirmasi Alamat</button>
      </div>
    </div>
  );
};

export default MapPicker;
