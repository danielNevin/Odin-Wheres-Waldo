import React from "react";
import level1 from '../Resources/level-1.jpg'

function GameBoard(props) {

  return (
    <div>
      <img src={level1 } alt="Where's Waldo?" useMap="#map1"/>
      <map name="map1">
        <area shape="rect" coords="520, 350, 560, 420" onClick={() => props.handleWaldoClick()} alt="Here"/>
        <area shape="rect" coords="230, 350, 265, 430" onClick={() => props.handleOdlawClick()} alt="Here"/>
        <area shape="rect" coords="620, 350, 670, 420" onClick={() => props.handleWizardClick()} alt="Here"/>
      </map>
    </div>
  );
}

export default GameBoard;