import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchReducer/searchSlice";
import currentLocationSlice from "./currentLocationReducer/currentLocationSlice";
import userLocationSlice from "./userCurrentLocation/userLocationSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    currentLocation: currentLocationSlice,
    userCurrentLocation: userLocationSlice,
  },
});
