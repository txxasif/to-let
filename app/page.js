"use client";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import PlacesAutoComplete from "@/components/autocomplete";
import { Slider } from "@/components/ui/slider";
import { HashLoader } from "react-spinners";
import currentLocationHook from "@/hooks/currentLocationHook";
import { SelectOption } from "@/components/field";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CustomMarker } from "@/components/custom-marker";
const containerStyle = {
  width: "100%",
  height: "100vh",
};
const libraries = ["places"];
const center = {
  lat: 22.8570451,
  lng: 91.3966686,
};
const options = [
  { value: "bachelor", name: "Bachelor" },
  { value: "family", name: "Family" },
];
const initialState = {
  type: "family",
  distance: 10,
};
export default function Home() {
  const [formData, setFormData] = useState(initialState);
  const [properties, setProperties] = useState([]);
  const { isLoaded } = useJsApiLoader({
    id: "google-maps",
    googleMapsApiKey: "AIzaSyDIoJxlZm-VtQTGEDLCCnFzHXEOpon-YIA",
  });

  const { currentLocation, setCurrentLocation } = currentLocationHook();
  function onClickChangeMarker(e) {
    const markedLocation = e.latLng.toJSON();
    console.log(markedLocation);
    setCurrentLocation(markedLocation);
  }
  function handleChange(e) {
    if (Array.isArray(e)) {
      console.log(e);
      setFormData((prev) => ({ ...prev, distance: e[0] }));
      return;
    }
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      `/api/property/filter?distance=${formData.distance}&type=${formData.type}&lat=${currentLocation.lat}&lng=${currentLocation.lng}`
    ).then((res) => res.json());
    setProperties(response.data);
  }

  if (!isLoaded) {
    return (
      <main className="w-full flex items-center justify-center h-screen">
        <HashLoader />
      </main>
    );
  }
  return (
    <main className="w-full bg-white relative container">
      <div className="flex space-x-4 my-3">
        <Slider
          onValueChange={handleChange}
          defaultValue={[formData.distance]}
          max={20}
          step={2}
        />
        <SelectOption
          values={options}
          defaultValue={formData.type}
          onChange={handleChange}
          name="type"
        />
        <Button onClick={handleSubmit}>Search</Button>
      </div>
      <div className="absolute   top-14 z-10 w-full">
        <PlacesAutoComplete />
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        onClick={onClickChangeMarker}
        zoom={14}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {properties.map((property, idx) => (
          <CustomMarker key={idx} data={property} />
        ))}
        <Marker position={currentLocation} />
      </GoogleMap>
    </main>
  );
}
