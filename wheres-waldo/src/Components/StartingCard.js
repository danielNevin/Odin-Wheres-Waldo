import React from "react";

export function StartingCard(props) {

  // Handles the clicking of the Play Now button
  const handlePlayClick = () => {
    props.setIsStart(false);
    props.handleTimerStart()
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pop-in origin-cente transition-all">
      <div className="flex flex-col justify-center items-center w-96 shadow-2xl p-8 gap-4 rounded-xl bg-white">
        <div className="flex flex-col text-center gap-2">
          <p className="font-bold text-lg">Welcome to Where's Waldo!</p>
          <p className="text-lg">Find Waldo, Odlaw, and the Wizard to win the game!</p>
          <p className="text-lg">To play press the button below</p>
        </div>
        <div>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold text-lg py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline cursor-pointer hover:scale-125 transition-all" type="button" onClick={() => handlePlayClick()}>
            Play Now
          </button>
        </div>
        <div>
          <p className="text-sm text-center">If you get a good time make sure to submit it to the Leaderboard!</p>
        </div>
      </div>
    </div>
  )
}