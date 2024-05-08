import { createSelector } from "@reduxjs/toolkit";
const useCurrentLocation = (state) => state.userCurrentLocation;
export const currentLocationSelector = createSelector(
  [useCurrentLocation],
  (useCurrentLocation) => useCurrentLocation.currentLocation
);
export const zoomSelector = createSelector(
  [useCurrentLocation],
  (useCurrentLocation) => useCurrentLocation.zoom
);
export const countSelector = createSelector(
  [useCurrentLocation],
  (useCurrentLocation) => useCurrentLocation.count
);
