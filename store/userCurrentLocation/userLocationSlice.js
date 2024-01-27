import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentLocation: {
    lat: 22.8570451,
    lng: 91.3966686,
  },
  error: false,
  zoom: 10,
};
export const userCurrentLocation = createSlice({
  name: "userCurrentLocation",
  initialState,
  reducers: {
    setUserCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setUserZoom: (state, action) => {
      state.zoom = action.payload;
    },
  },
});
export const { setUserCurrentLocation, setUserZoom } =
  userCurrentLocation.actions;
export default userCurrentLocation.reducer;
