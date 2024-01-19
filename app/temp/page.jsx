"use client";

import searchHook from "@/hooks/searchHook";

export default function Page() {
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

  return (
    <main className="flex items-start justify-center">
      <h1>{selectedIndex}</h1>
      <button onClick={() => setSelectedIndex("up")}>Click</button>
    </main>
  );
}
