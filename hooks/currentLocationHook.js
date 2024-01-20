"use client";
import {
  currentLocationSelector,
  zoomSelector,
} from "@/store/currentLocationReducer/currentLocationSelector";
import { setCurrentLocation as setLoc } from "@/store/currentLocationReducer/currentLocationSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export default function currentLocationHook() {
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
