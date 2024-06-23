"use client";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { HashLoader } from "react-spinners";
import userCurrentLocationHook from "@/hooks/userCurrenLocationHook";
import toast from "react-hot-toast";
import { CustomMarker } from "@/components/custom-marker";
import { useSession } from "next-auth/react";
import Link from "next/link";
import CreateTolet from "@/components/user/post-tolet";

const customMarkerIcon = {
  url: "/home.png", // Path to your custom marker icon
  scaledSize: { width: 20, height: 20 }, // Size of the marker icon
};
const containerStyle = {
  width: "100%",
  height: "100vh",
};
const libraries = ["places"];
const center = {
  lat: 22.8570451,
  lng: 91.3966686,
};
export default function UserProperties({ properties }) {
  console.log(properties);
  const { isLoaded } = useJsApiLoader({
    id: "google-maps",
    googleMapsApiKey: "AIzaSyDIoJxlZm-VtQTGEDLCCnFzHXEOpon-YIA",
  });

  const { data: session, status } = useSession();
  const { currentLocation, setCurrentLocation } = userCurrentLocationHook();

  function onClickChangeMarker(e) {
    const markedLocation = e.latLng.toJSON();
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
      <div className="flex items-center justify-center">
        <CreateTolet />
        <Link href={`/${session ? session.user._id : null}/myposts`}>
          <button className="text-xl flex items-center gap-4 hover:bg-slate-200 p-3 m-2 rounded-md border">
            <span>
              <img className="w-6 h-6" src="/postcard-svgrepo-com.png" alt="" />
            </span>
            My Posts
          </button>
        </Link>
      </div>
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
        {properties.map((property, idx) => (
          <CustomMarker key={idx} data={property} />
        ))}
        {/* <Marker position={currentLocation} icon={customMarkerIcon} /> */}
      </GoogleMap>
    </main>
  );
}
