import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchReducer/searchSlice";
import currentLocationSlice from "./currentLocationReducer/currentLocationSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    currentLocation: currentLocationSlice,
  },
});
