export default function SuggestedList({
  places,
  selectedIndex,
  setSelectedPlace,
}) {
  console.log(places);

  function selectPlace(place) {
    console.log(place);
    setSelectedPlace(place);
  }
  console.log(selectedIndex);
  return (
    <div className="max-h-96 w-full bg-white overflow-y-scroll ">
      {places.map((place, idx) => (
        <div
          onClick={() => selectPlace(place)}
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
