import React from "react";
import { Link } from "react-router-dom";

function LeaderboardHeader(props) {

  const handleNewGameClick = (props) => {
    props.setIsStart(true);
    props.setElapsedTime(0);
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex text-center justify-center items-center px-16">
        <h1 className="text-2xl tracking-widest">WHERES WALDO</h1>
      </div>
      <div className="h-20 p-8 flex flex-row justify-end items-center">
        <Link to={'/'}>
          <div>
            <button className="flex p-4 bg-green-500 rounded-xl text-white font-semibold hover:bg-green-700 hover:scale-110 transition-all" onClick={() => handleNewGameClick(props)}>New Game</button>
          </div>
        </Link>
      </div>
    </div>

  )
}

export default LeaderboardHeader;
