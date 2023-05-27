import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';

import { collection, getDocs, doc, updateDoc, addDoc, getDoc } from "firebase/firestore"; 
import { db } from "./config/firestore";

import { Game } from "./Components/Game";
import { Leaderboard } from "./Components/Leaderboard";

function App() {

  const [isStart, setIsStart] = useState(true);
  const [waldoFound, setWaldoFound] = useState(false);
  const [odlawFound, setOdlawFound] = useState(false);
  const [wizardFound, setWizardFound] = useState(false);
  const [characterCoordinates, setCharacterCoordinates] = useState({});
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [username, setUsername] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  const getGameboardOneData = async () => {
    const querySnapshot = await getDocs(collection(db, "wheresWaldoData"));
    const data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setCharacterCoordinates(data);
  };

  const addToLeaderboard = async (userName, userTime) => {
    const docRef = await addDoc(collection(db, "wheresWaldoLeaderboard"), {
      name: userName,
      time: userTime
    });
  };

  const getLeaderboard = async () => {
    const querySnapshot = await getDocs(collection(db, "wheresWaldoLeaderboard"));
    const leaderboardData = (querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
    const sortedLeaderboard = [...leaderboardData].sort((a, b) => a.time - b.time);
    setLeaderboard(sortedLeaderboard);
  }

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  }

  const handleSubmitClick = () => {
    addToLeaderboard(username, elapsedTime);
  };

  const handleWaldoClick = () => {
    setWaldoFound(true);
  };
  
  const handleOdlawClick = () => {
    setOdlawFound(true);
  };

  const handleWizardClick = () => {
    setWizardFound(true);
  };

  const handleTimerStart = () => {
    setStartTime(Date.now());
  };

  const handleTimerStop = () => {
    setElapsedTime((Date.now() - startTime) / 1000);
  };

  useEffect(() => {
    getGameboardOneData();
  }, []);

  useEffect(() => {
    getLeaderboard();
  }, []);

  useEffect(() => {
    if (waldoFound && odlawFound && wizardFound) {
      setIsWin(true);
      handleTimerStop();
    }
  }, [waldoFound, odlawFound, wizardFound]);

  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <Game handleWaldoClick={handleWaldoClick} handleOdlawClick={handleOdlawClick} handleWizardClick={handleWizardClick} characterCoordinates={characterCoordinates} setWaldoFound={setWaldoFound} setOdlawFound={setOdlawFound} setWizardFound={setWizardFound} waldoFound={waldoFound} odlawFound={odlawFound} wizardFound={wizardFound} elapsedTime={elapsedTime} username={username} handleSubmitClick={handleSubmitClick} handleInputChange={handleInputChange} isWin={isWin} isStart={isStart} setIsStart={setIsStart} handleTimerStart={handleTimerStart} setElapsedTime={setElapsedTime} /> } />
        <Route path='/leaderboard' element={ <Leaderboard leaderboard={leaderboard} setIsStart={setIsStart} setElapsedTime={setElapsedTime} /> } />
      </Routes>
    </div>
  );
}

export default App;