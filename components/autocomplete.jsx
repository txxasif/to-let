"use client";
import axios from "axios";
import { useCallback, useState } from "react";
import { Input } from "./ui/input";
import SuggestedList from "./suggestions";
import searchHook from "@/hooks/searchHook";
export default function PlacesAutocomplete() {
  const {
    text,
    searchResults,
    selectedPlace,
    selectedIndex,
    setText,
    setSearchResults,
    setSelectedPlace,
    setSelectedIndex,
  } = searchHook();
  const debouncedSearch = useCallback(async (value) => {
    const link = `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&filter=countrycode:bd&format=json&apiKey=cb3064e03e944dd3a8bdbb97e221a185`;

    try {
      const response = await axios.get(link);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  // Handle input change event
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
    // Debounce the API call
    setTimeout(() => debouncedSearch(value), 300);
  };
  function handleKeyEvent(e) {
    if (e.key === "ArrowUp") {
      setSelectedIndex("up");
    } else if (e.key === "ArrowDown") {
      setSelectedIndex("down");
    } else if (e.key === "Enter") {
      if (selectedIndex !== -1) {
        const selectedProduct = searchResults[selectedIndex];
        alert(selectedProduct.address_line2);
        setSelectedPlace(selectedProduct);
        setSearchResults([]);
      }
    }
  }
  function setSelectedPlaceReducer(place) {
    setSelectedPlace(place);
    alert(place.address_line2);
    setSearchResults([]);
  }
  return (
    <div className="flex flex-col mx-auto min-w-min max-w-lg">
      <Input
        onKeyDown={handleKeyEvent}
        type="text"
        value={text}
        onChange={onChange}
      />
      {text !== "" && searchResults.length > 0 ? (
        <SuggestedList
          places={searchResults}
          selectedIndex={selectedIndex}
          setSelectedPlace={setSelectedPlaceReducer}
        />
      ) : null}
    </div>
  );
}
