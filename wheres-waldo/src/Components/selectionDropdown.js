import React from "react";

function SelectionDropdown(props) {

  // Handles the clicking of the 3 options within the Character Selection Dropdown
  // Evaluates whether the coordinates of the user click are within the bounding boxes of the characters on the Game Board
  const handleUserClick = (name) => {
    if (name == 'waldo') {
      const clickInTolerance = (((props.scaledX <= props.characterCoordinates[0].waldo[0] + 2) && (props.scaledX >= props.characterCoordinates[0].waldo[0] - 2)) && ((props.scaledY <= props.characterCoordinates[0].waldo[1] + 2)) && ((props.scaledY >= props.characterCoordinates[0].waldo[1] - 2)));
      clickInTolerance ? props.setWaldoFound(true) : alert('Incorrect Guess');
      props.setIsClicked(false);
    } else if (name == 'odlaw') {
      const clickInTolerance = (((props.scaledX <= props.characterCoordinates[0].odlaw[0] + 2) && (props.scaledX >= props.characterCoordinates[0].odlaw[0] - 2)) && ((props.scaledY <= props.characterCoordinates[0].odlaw[1] + 2)) && ((props.scaledY >= props.characterCoordinates[0].odlaw[1] - 2)));
      clickInTolerance ? props.setOdlawFound(true) : alert('Incorrect Guess');
      props.setIsClicked(false);
    } else if (name == 'wizard') {
      const clickInTolerance = (((props.scaledX <= props.characterCoordinates[0].wizard[0] + 2) && (props.scaledX >= props.characterCoordinates[0].wizard[0] - 2)) && ((props.scaledY <= props.characterCoordinates[0].wizard[1] + 2)) && ((props.scaledY >= props.characterCoordinates[0].wizard[1] - 2)));
      clickInTolerance ? props.setWizardFound(true) : alert('Incorrect Guess');
      props.setIsClicked(false);
    }
  }

  return (
    <div style={{position: "absolute", left: props.position.X, top: props.position.Y,}}>
      <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-r-xl rounded-b-xl shadow-2xl w-24">
        <ul className="py-2 text-sm text-gray-700 font-semibold">
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleUserClick('waldo')}>Waldo</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleUserClick('odlaw')}>Odlaw</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleUserClick('wizard')}>Wizard</p>
          </li>
        </ul>
      </div>
    </div> 
  )
}

export default SelectionDropdown;