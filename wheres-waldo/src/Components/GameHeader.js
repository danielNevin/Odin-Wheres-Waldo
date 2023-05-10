import React from "react";
import waldo from "../Resources/waldoHeadshot.jpg";
import odlaw from "../Resources/odlawHeadshot.jpg";
import wizard from "../Resources/wizardHeadshot.jpg"

function GameHeader(props) {

  return (
    <div className="h-20 p-8 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-4 ">
        <div className="flex flex-col justify-center items-center">
          <img className={`h-8 w-8 filter ${props.waldoGrayscale ? 'grayscale' : ''}`} src={waldo} alt="Waldo"/>
          <p>Waldo</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className={`h-8 w-8 filter ${props.odlawGrayscale ? 'grayscale' : ''}`} src={odlaw} alt="Odlaw"/>
          <p>Odlaw</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className={`h-8 w-8 filter ${props.wizardGrayscale ? 'grayscale' : ''}`} src={wizard} alt="Wizard"/>
          <p>Wizard</p>
        </div>
      </div>
      <div>
        <button className="flex p-4 bg-green-500 rounded-xl text-white font-semibold hover:bg-green-700">Return Home</button>
      </div>
    </div>
  )
}

export default GameHeader;
