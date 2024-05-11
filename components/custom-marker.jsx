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
import toast from "react-hot-toast";
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
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </Marker>
  );
}
