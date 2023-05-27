import React from "react";

export function LeaderboardDisplay(props) {

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pop-in origin-cente transition-all">
      <div className="flex flex-col justify-between items-center w-96 shadow-2xl p-8 gap-4 rounded-xl bg-white">
        <div>
          <h1 className="text-2xl tracking-widest">LEADERBOARD</h1>
        </div>
        <div className="flex flex-col gap-4 h-3/4 overflow-auto p-8">
          {(props.leaderboard).map((object, index) => (
            <div key={index} className="flex gap-4 justify-center bg-green-500 px-4 py-2 rounded-xl text-white hover:scale-110 transition-all">
              <div className="flex text-right w-4">
                <span>{index+1}</span>
              </div>
              <div className="flex text-right w-24">
                <span>{object.name}</span>
              </div>
              <div className="flex text-left w-24">
                <span>{object.time}s</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}