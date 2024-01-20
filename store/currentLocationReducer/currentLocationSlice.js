import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentLocation: {
    lat: 22.8570451,
    lng: 91.3966686,
  },
  error: false,
  zoom: 10,
};
export const currentLocation = createSlice({
  name: "currentLocation",
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setZoom: (state, action) => {
      state.zoom = action.payload;
    },
  },
});
export const { setCurrentLocation, setZoom } = currentLocation.actions;
export default currentLocation.reducer;
