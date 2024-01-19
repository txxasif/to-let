import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchReducer/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});
