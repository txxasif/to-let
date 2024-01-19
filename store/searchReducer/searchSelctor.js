import { createSelector } from "@reduxjs/toolkit";
const searchState = (state) => state.search;
export const textSelector = createSelector(
  [searchState],
  (searchState) => searchState.text
);
export const searchResultsSelector = createSelector(
  [searchState],
  (searchState) => searchState.searchResults
);
export const selectedIndexSelector = createSelector(
  [searchState],
  (searchState) => searchState.selectedIndex
);
export const selectedPlaceSelector = createSelector(
  [searchState],
  (searchState) => searchState.selectedPlace
);
