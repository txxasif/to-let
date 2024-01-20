import { createSelector } from "@reduxjs/toolkit";
const currentLocationState = (state) => state.currentLocation;
export const currentLocationSelector = createSelector(
  [currentLocationState],
  (currentLocationState) => currentLocationState.currentLocation
);
export const zoomSelector = createSelector(
  [currentLocationState],
  (currentLocationState) => currentLocationState.zoom
);
