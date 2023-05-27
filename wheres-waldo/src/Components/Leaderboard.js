import React from "react";
import LeaderboardHeader from "./LeaderboardHeader";
import { LeaderboardDisplay } from "./LeaderboardDisplay";

export function Leaderboard(props) {

  return (
    <div>
      <LeaderboardHeader setIsStart={props.setIsStart} setElapsedTime={props.setElapsedTime}/>
      <div className="shadow-inner h-full w-full">&nbsp;
        <LeaderboardDisplay leaderboard={props.leaderboard}/>
      </div>
    </div>
  )
}