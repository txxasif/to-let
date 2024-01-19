"use client";
import Image from "next/image";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import PlacesAutoComplete from "@/components/autocomplete";
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
    libraries: libraries,
  });

  return (
    isLoaded && (
      <main className="w-full bg-white relative">
        <div className="absolute z-10 w-full">
          <PlacesAutoComplete />
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </main>
    )
  );
}
