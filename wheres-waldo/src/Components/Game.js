import React from "react";
import GameBoard from "./GameBoard";
import GameHeader from "./GameHeader";
import { WinConditionDisplay } from "./WinConditionDisplay";
import { StartingCard } from "./StartingCard";

export function Game(props) {
  return (
    <div className="relative">
      <GameHeader waldoFound={props.waldoFound} odlawFound={props.odlawFound} wizardFound={props.wizardFound}/>
      <GameBoard handleWaldoClick={props.handleWaldoClick} handleOdlawClick={props.handleOdlawClick} handleWizardClick={props.handleWizardClick} characterCoordinates={props.characterCoordinates} setWaldoFound={props.setWaldoFound} setOdlawFound={props.setOdlawFound} setWizardFound={props.setWizardFound}/>
      {props.isWin && (
        <WinConditionDisplay elapsedTime={props.elapsedTime} username={props.username} handleSubmitClick={props.handleSubmitClick} handleInputChange={props.handleInputChange}/>
      )}
      {props.isStart && (
        <StartingCard handleTimerStart={props.handleTimerStart} setIsStart={props.setIsStart}/>
      )}
    </div>
  )
}