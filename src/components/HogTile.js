import React from "react";

const HogTile = ({ name, image, onClick, selected }) => (
  <div className={`hog-tile ${selected ? "selected" : ""}`}onClick={onClick}>
    <h2>{name}</h2>
    <img src={image.url} alt="image.alt" />

    {selected && (
        <div className="hog-details">
          <p>Specialty: {selected.specialty}</p>
          <p>Weight: {selected.weight}</p>
          <p>Greased: {selected.greased ? "Yes" : "No"}</p>
          <p>Highest Medal Achieved: {selected["highest medal achieved"]}</p>
        </div>
      )}
  </div>
);

export default HogTile;
