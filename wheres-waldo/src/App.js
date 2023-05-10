import React, { useState } from "react";
import GameHeader from "./Components/GameHeader";
import GameBoard from "./Components/GameBoard";

function App() {

  const [waldoGrayscale, setWaldoGrayscale] = useState(false);
  const [odlawGrayscale, setOdlawGrayscale] = useState(false);
  const [wizardGrayscale, setWizardGrayscale] = useState(false);

  function handleWaldoClick() {
    setWaldoGrayscale(true);
  }

  function handleOdlawClick() {
    setOdlawGrayscale(true);
  }

  function handleWizardClick() {
    setWizardGrayscale(true);
  }

  return (
    <div className="App">
      <GameHeader waldoGrayscale={waldoGrayscale} odlawGrayscale={odlawGrayscale} wizardGrayscale={wizardGrayscale}/>
      <GameBoard handleWaldoClick={handleWaldoClick} handleOdlawClick={handleOdlawClick} handleWizardClick={handleWizardClick}/>
    </div>
  );
}

export default App;