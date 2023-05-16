import React, { useState } from "react";
import level1 from '../Resources/level-1.jpg'
import SelectionDropdown from "./selectionDropdown";

function GameBoard(props) {

  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState({
    X: 0,
    Y: 0
  });
  const [scaledX, seScaledX] = useState(0);
  const [scaledY, setScaledY] = useState(0);

  const handleImageClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = rect.width - (rect.width - e.clientX); //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    setIsClicked(!isClicked);
    setPosition({X: x, Y: y});
    seScaledX((x / rect.width) * 100);
    setScaledY((y / rect.height) * 100);
  }

  return (
    <div className="relative">
      <img src={level1 } alt="Where's Waldo?" onClick={handleImageClick} className="cursor-pointer"/>
      {isClicked && (
          <SelectionDropdown position={position}/>
      )}
    </div>
  );
}

export default GameBoard;