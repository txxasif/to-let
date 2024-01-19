"use client";
import axios from "axios";
import { useCallback, useState } from "react";
import { Input } from "./ui/input";

export default function PlacesAutocomplete() {
  // State for the input text
  const [text, setText] = useState("");
  // State for search results
  const [searchResults, setSearchResults] = useState([]);
  // State for loading indicator
  const [loading, setLoading] = useState(false);
  //selected index
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedPlace, setSelectedPlace] = useState(null);
  // Debounced search function to avoid making too many requests while typing
  const debouncedSearch = useCallback(async (value) => {
    setLoading(true);
    const link = `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&country=Banglades&format=json&apiKey=cb3064e03e944dd3a8bdbb97e221a185`;

    try {
      const response = await axios.get(link);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
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
      setSelectedIndex((prevIndex) =>
        prevIndex === -1 ? searchResults.length - 1 : prevIndex - 1
      );
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex === searchResults.length - 1 ? -1 : prevIndex + 1
      );
    } else if (e.key === "Enter") {
      if (selectedIndex !== -1) {
        const selectedProduct = searchResults[selectedIndex];
        alert(selectedProduct.address_line2);
        setSearchResults([]);
      }
    }
  }

  // Render the component
  return (
    <>
      <div className="flex flex-col mx-auto max-w-lg">
        <Input
          onKeyDown={handleKeyEvent}
          type="text"
          value={text}
          onChange={onChange}
        />
        {text !== "" && searchResults.length > 0 ? (
          <TempList places={searchResults} selectedIndex={selectedIndex} />
        ) : null}
      </div>
    </>
  );
}

// Component to render the list of places
function TempList({ places, selectedIndex }) {
  console.log(places);

  return (
    <div className="max-h-96 w-full bg-white overflow-y-scroll ">
      {places.map((place, idx) => (
        <div
          className={`${
            selectedIndex === idx ? "bg-gray-200" : ""
          } py-2 px-4 lex items-center justify-between gap-8 hover:bg-gray-200 cursor-pointer`}
          key={idx}
        >
          <p>{place.address_line2}</p>
        </div>
      ))}
    </div>
  );
}
