"use client";
import {
  textSelector,
  searchResultsSelector,
  selectedIndexSelector,
  selectedPlaceSelector,
} from "@/store/searchReducer/searchSelctor";
import {
  setSelectedIndex as setIdx,
  setSearchResults as setSrcRes,
  setSelectedPlace as setSelPla,
  setText as setTxt,
} from "@/store/searchReducer/searchSlice";
import { useSelector, useDispatch } from "react-redux";

export default function searchHook() {
  const text = useSelector(textSelector);
  const searchResults = useSelector(searchResultsSelector);
  const selectedPlace = useSelector(selectedPlaceSelector);
  const selectedIndex = useSelector(selectedIndexSelector);
  const dispatch = useDispatch();
  function setText(txt) {
    dispatch(setTxt(txt));
  }
  function setSearchResults(results) {
    dispatch(setSrcRes(results));
  }
  function setSelectedPlace(place) {
    dispatch(setSelPla(place));
  }
  function setSelectedIndex(type) {
    dispatch(setIdx(type));
  }
  return {
    text,
    searchResults,
    selectedPlace,
    selectedIndex,
    setText,
    setSearchResults,
    setSelectedPlace,
    setSelectedIndex,
  };
}
