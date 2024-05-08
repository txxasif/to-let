"use client";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import { HashLoader } from "react-spinners";
import userCurrentLocationHook from "@/hooks/userCurrenLocationHook";
import CreateTolet from "./user/post-tolet";
const containerStyle = {
  width: "100%",
  height: "100vh",
};
const libraries = ["places"];
const center = {
  lat: 22.8570451,
  lng: 91.3966686,
};
export default function Home() {
  const { isLoaded } = useJsApiLoader({
    id: "google-maps",
    googleMapsApiKey: "AIzaSyDIoJxlZm-VtQTGEDLCCnFzHXEOpon-YIA",
  });
  const { currentLocation, setCurrentLocation } = userCurrentLocationHook();
  function onClickChangeMarker(e) {
    const markedLocation = e.latLng.toJSON();
    console.log(markedLocation);
    setCurrentLocation(markedLocation);
  }
  if (!isLoaded) {
    return (
      <main className="w-full flex items-center justify-center h-screen">
        <HashLoader />
      </main>
    );
  }

  return (
    <main className="w-full bg-white relative">
      <CreateTolet />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={14}
        onClick={onClickChangeMarker}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={currentLocation} />
      </GoogleMap>
    </main>
  );
}
