import React from "react";

const HogTile = ({ name, image, onClick }) => (
  <div className="hog-tile" onClick={onClick}>
    <h2>{name}</h2>
    <img src={image.url} alt="" />
  </div>
);

export default HogTile;
