"use client";
import {
  currentLocationSelector,
  zoomSelector,
} from "@/store/userCurrentLocation/userCurrentLocationSelector";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUserCurrentLocation as setLoc } from "@/store/userCurrentLocation/userLocationSlice";
export default function userCurrentLocationHook() {
  const dispatch = useDispatch();
  const currentLocation = useSelector(currentLocationSelector);
  const zoom = useSelector(zoomSelector);
  function setCurrentLocation(place) {
    dispatch(setLoc(place));
  }

  /* eslint-disable no-alert, no-console */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(
        setLoc({
          lat: latitude,
          lng: longitude,
        })
      );
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
  }, []);
  return {
    currentLocation,
    zoom,
    setCurrentLocation,
  };
}
