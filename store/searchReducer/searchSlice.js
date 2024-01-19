import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  text: "",
  searchResults: [],
  selectedIndex: -1,
  selectedPlace: null,
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSelectedIndex: (state, action) => {
      if (action.payload === "up") {
        state.selectedIndex =
          state.selectedIndex === -1
            ? state.searchResults.length - 1
            : state.selectedIndex - 1;
      } else if (action.payload === "down") {
        state.selectedIndex =
          state.selectedIndex === state.searchResults.length - 1
            ? -1
            : state.selectedIndex + 1;
      } else if (action.payload === "enter") {
        if (state.selectedIndex !== -1) {
          const selectedProduct = state.searchResults[state.selectedIndex];
          state.selectedPlace = selectedProduct;
          state.searchResults = [];
        }
      }
    },
    setSelectedPlace: (state, action) => {
      state.selectedPlace = action.payload;
      state.searchResults = [];
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setSelectedIndex, setSelectedPlace, setText, setSearchResults } =
  search.actions;
export default search.reducer;
