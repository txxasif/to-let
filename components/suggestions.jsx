import currentLocationHook from "@/hooks/currentLocationHook";
import searchHook from "@/hooks/searchHook";
export default function SuggestedList() {
  const { searchResults, selectedIndex, setSelectedPlace, setText } =
    searchHook();
  const { setCurrentLocation } = currentLocationHook();
  function setPlace(place) {
    setSelectedPlace(place);
    setText(place.formatted);
    console.log(place);
    const { lat, lon: lng } = place;
    setCurrentLocation({ lat, lng });
  }

  return (
    <div className="max-h-96 w-full bg-white overflow-y-scroll ">
      {searchResults.map((place, idx) => (
        <div
          onClick={() => setPlace(place)}
          className={`${
            selectedIndex === idx ? "bg-gray-200" : ""
          } py-2 px-4 lex items-center justify-between gap-8 hover:bg-gray-200 cursor-pointer`}
          key={idx}
        >
          <p>{place.formatted}</p>
        </div>
      ))}
    </div>
  );
}
