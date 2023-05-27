import React from "react";
import { Link } from "react-router-dom";

export function WinConditionDisplay(props) {

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pop-in origin-center">
      <form className="flex flex-col justify-center items-center w-min shadow-2xl p-8 gap-4 rounded-xl bg-white">
        <div className="flex flex-col text-center gap-2">
          <p className="text-sm">Congratulations! You completed the game in:</p>
          <p className="font-bold">{props.elapsedTime} seconds</p>
        </div>
        <div>
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline" type="text" id="userName" placeholder="Your name here" value={props.username} onChange={props.handleInputChange}/>  
        </div>
        <div>
          <Link to={'/leaderboard'}>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => props.handleSubmitClick()}>
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}