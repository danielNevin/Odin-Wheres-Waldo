import React from "react";
import waldo from "../Resources/waldoHeadshot.jpg";
import odlaw from "../Resources/odlawHeadshot.jpg";
import wizard from "../Resources/wizardHeadshot.jpg";

import { Link } from "react-router-dom";

function GameHeader(props) {

  return (
    <div className="h-20 p-8 flex flex-row justify-between items-center bg-white">
      <div className="flex flex-row gap-4 ">
        <div className="flex flex-col justify-center items-center">
          <img className={`h-8 w-8 filter transition-all ${props.waldoFound ? 'scale-110' : 'grayscale scale-75'}`} src={waldo} alt="Waldo"/>
          <p>Waldo</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className={`h-8 w-8 filter transition-all ${props.odlawFound ? 'scale-110' : 'grayscale scale-75'}`} src={odlaw} alt="Odlaw"/>
          <p>Odlaw</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className={`h-8 w-8 filter transition-all ${props.wizardFound ? 'scale-110' : 'grayscale scale-75'}`} src={wizard} alt="Wizard"/>
          <p>Wizard</p>
        </div>
      </div>
      <Link to={'/leaderboard'}>
        <div>
          <button className="flex p-4 bg-green-500 rounded-xl text-white font-semibold hover:bg-green-700 hover:scale-110 transition-all">Leaderboard</button>
        </div>
      </Link>
    </div>
  )
}

export default GameHeader;
