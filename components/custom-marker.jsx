"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Marker } from "@react-google-maps/api";
import { useState } from "react";
import { ImageCarousel } from "./image-carousel";
import {
  FloorSvg,
  LocationSvg,
  PhoneSvg,
  RentSvg,
  RoomsSvg,
  VelSvg,
} from "@/icons/icons";
const customMarkerIcon = {
  url: "/home.png", // Path to your custom marker icon
  scaledSize: { width: 20, height: 20 }, // Size of the marker icon
};
export function CustomMarker({ data }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage drawer visibility

  const handleMarkerClick = () => {
    setIsOpen(true);
  };
  console.log(data);
  return (
    <Marker
      onClick={handleMarkerClick}
      position={{ lat: data.lat, lng: data.lng }}
      icon={customMarkerIcon}
    >
      {" "}
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-4  flex flex-row-reverse justify-evenly max-w-4xl mx-auto w-full ">
            <DrawerHeader>
              <DrawerDescription className="leading-3 space-y-2">
                <DrawerTitle className="pl-1">{data.homeName}</DrawerTitle>
                <div className="flex items-center  space-x-2 ">
                  <LocationSvg className="w-4" /> <p>Address: </p>{" "}
                  <h3>{data.address}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneSvg className="w-4 " /> <p>Address: </p>{" "}
                  <h3>{data.contactNumber}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <RentSvg className="w-4 opacity-70" /> <p>Rent: </p>{" "}
                  <h3>{data.rent} TK</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <FloorSvg className="w-4 opacity-70" /> <p>Floor No: </p>{" "}
                  <h3>{data.floorNo}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <RoomsSvg className="w-4 opacity-70" /> <p>Rooms: </p>{" "}
                  <h3>{data.rooms}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <VelSvg className="w-4 opacity-70" /> <p>Veranda: </p>{" "}
                  <h3>{data.veranda}</h3>
                </div>
                <div>
                  <button className="px-2 py-2 bg-black text-white font-medium rounded mt-2">
                    {" "}
                    Contact us
                  </button>
                </div>
              </DrawerDescription>
            </DrawerHeader>
            {/* Other Details */}

            <div className="w-3/5 p-4 pt-0">
              {isOpen ? <ImageCarousel photos={data.photos} /> : null}
            </div>
            {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
          </div>
        </DrawerContent>
      </Drawer>
    </Marker>
  );
}
