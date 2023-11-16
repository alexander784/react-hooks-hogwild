import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";

import hogs from "./porkers_data";
import HogTile from "./HogTile";
import porkerData from "./porkers_data";
import AddTile from "./AddTile";

function App() {
  // store data in state
  const [selectedHog, setSelectedHog] = useState(null);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortType, setSortType] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [newHogName, setNewHogName] = useState("");

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


	const handleToggleHide = (hog) => {
		setHiddenHogs((prevHiddenHogs) => 
		prevHiddenHogs.includes(hog) ? prevHiddenHogs.filter((h) => h !== hog) : [...prevHiddenHogs, hog]
		);
	};


  const getFilteredAndSortedHogs = () => {
    let filteredHogs = porkerData.filter((hog) => !hiddenHogs.includes(hog));

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
  const handleAdd = (newTile) => {

	
  }

  return (
    <div className="App">
      <Nav
        onToggleGreased={handleToggleGreased}
        onSortChange={handleSortChange}
		onHide={handleToggleHide}
      />
	  <Switch>
		<Route path="/" exact>

		{getFilteredAndSortedHogs().map((hog) => (
        <HogTile
          key={hog.name}
		  name={hog.name}
		  image={hog.image}
		  selected={selectedHog === hog}
          onClick={() => handleHogClick(hog)}
        />
      ))}
		</Route>
		<Route path="/add">
		<AddTile onAdd={handleAdd} />
		</Route>
	  </Switch>
	  <link to="/add">Add New Tile</link>
    </div>
  );
}

export default App;
