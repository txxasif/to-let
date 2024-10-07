"use client";

import { useState } from "react";
import { Marker } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ImageCarousel } from "./image-carousel";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Home, Building2, DoorOpen, Wind } from "lucide-react";

const customMarkerIcon = {
  url: "/home1.svg",
  scaledSize: { width: 20, height: 20 },
};

export function CustomMarker({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsOpen(true);
  };

  return (
    <Marker
      onClick={handleMarkerClick}
      position={{ lat: data.lat, lng: data.lng }}
      icon={customMarkerIcon}
    >
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="sr-only">
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-4 flex flex-row-reverse justify-evenly max-w-4xl mx-auto w-full">
            <DrawerHeader className="space-y-2">
              <DrawerTitle className="text-2xl font-serif mb-2">
                {data.homeName}
              </DrawerTitle>
              <DrawerDescription className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <p className="font-medium">Address:</p>
                  <h3 className="text-sm">{data.address}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <p className="font-medium">Contact:</p>
                  <h3 className="text-sm">{`0${data.contactNumber}`}</h3>
                </div>
                <Separator className="my-2" />
                <div className="flex items-center space-x-2">
                  <Home className="w-4 h-4 text-primary" />
                  <p className="font-medium">Rent:</p>
                  <h3 className="text-sm font-semibold">{data.rent} TK</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <p className="font-medium">Floor No:</p>
                  <h3 className="text-sm">{data.floorNo}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <DoorOpen className="w-4 h-4 text-primary" />
                  <p className="font-medium">Rooms:</p>
                  <h3 className="text-sm">{data.rooms}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Wind className="w-4 h-4 text-primary" />
                  <p className="font-medium">Veranda:</p>
                  <h3 className="text-sm">{data.veranda}</h3>
                </div>
                <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Us
                </Button>
              </DrawerDescription>
            </DrawerHeader>
            <div className="w-3/5 p-4 pt-0">
              {isOpen ? <ImageCarousel photos={data.photos} /> : null}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </Marker>
  );
}
