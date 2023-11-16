import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";

import hogs from "./porkers_data";
import HogTile from "./HogTile";
import porkerData from "./porkers_data";

function App() {
  // store data in state
  const [selectedHog, setSelectedHog] = useState(null);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortType, setSortType] = useState(null);

  // function to handle the Click event
  const handleHogClick = (hog) => {
    setSelectedHog(selectedHog === hog ? null : hog);
  };

  const handleToggleGreased = () => {
    setShowGreasedOnly(!showGreasedOnly);
  };

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const getFilteredAndSortedHogs = () => {
    let filteredHogs = porkerData;

    if (showGreasedOnly) {
      filteredHogs = filteredHogs.filter((hog) => hog.greased);
    }

    if (sortType === "name") {
      filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "weight") {
      filteredHogs.sort((a, b) => a.weight - b.weight);
    }
    return filteredHogs;
  };

  return (
    <div className="App">
      <Nav
        onToggleGreased={handleToggleGreased}
        onSortChange={handleSortChange}
      />

      {getFilteredAndSortedHogs().map((hog) => (
        <HogTile
          key={hog.name}
		  name={hog.name}
		  image={hog.image}
		  selected={selectedHog === hog}
          onClick={() => handleHogClick(hog)}
        />
      ))}

      
    </div>
  );
}

export default App;
