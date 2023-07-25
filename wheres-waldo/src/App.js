import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./config/firestore";

import { Game } from "./Components/Game";
import { Leaderboard } from "./Components/Leaderboard";

function App() {
  // State variables
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

  // Fetch game board data from Firestore
  const getGameboardOneData = async () => {
    const querySnapshot = await getDocs(collection(db, "wheresWaldoData"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCharacterCoordinates(data);
  };

  // Add user's name and time to the leaderboard
  const addToLeaderboard = async (userName, userTime) => {
    const docRef = await addDoc(collection(db, "wheresWaldoLeaderboard"), {
      name: userName,
      time: userTime
    });
  };

  // Fetch leaderboard data from Firestore
  const getLeaderboard = async () => {
    const querySnapshot = await getDocs(collection(db, "wheresWaldoLeaderboard"));
    const leaderboardData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const sortedLeaderboard = [...leaderboardData].sort((a, b) => a.time - b.time);
    setLeaderboard(sortedLeaderboard);
  }

  // Handle input change in the username field
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  }

  // Handle submit button click
  const handleSubmitClick = () => {
    addToLeaderboard(username, elapsedTime);
  };

  // Handle Waldo character click
  const handleWaldoClick = () => {
    setWaldoFound(true);
  };

  // Handle Odlaw character click
  const handleOdlawClick = () => {
    setOdlawFound(true);
  };

  // Handle Wizard character click
  const handleWizardClick = () => {
    setWizardFound(true);
  };

  // Start the timer
  const handleTimerStart = () => {
    setStartTime(Date.now());
  };

  // Stop the timer and calculate elapsed time
  const handleTimerStop = () => {
    setElapsedTime((Date.now() - startTime) / 1000);
  };

  // Fetch game board data from Firestore when the component mounts
  useEffect(() => {
    getGameboardOneData();
  }, []);

  // Fetch leaderboard data from Firestore when the component mounts
  useEffect(() => {
    getLeaderboard();
  }, []);

  // Check if the player has found all characters and stop the timer
  useEffect(() => {
    if (waldoFound && odlawFound && wizardFound) {
      setIsWin(true);
      handleTimerStop();
    }
  }, [waldoFound, odlawFound, wizardFound]);

  // Get leaderboard data from Firestore when the route changes
  let location = useLocation();

  useEffect(() => {
    getLeaderboard();
  }, [location]);

  return (
    <div className="bg-stone-100 h-screen">
      <Routes>
        <Route exact path='/' element={ <Game handleWaldoClick={handleWaldoClick} handleOdlawClick={handleOdlawClick} handleWizardClick={handleWizardClick} characterCoordinates={characterCoordinates} setWaldoFound={setWaldoFound} setOdlawFound={setOdlawFound} setWizardFound={setWizardFound} waldoFound={waldoFound} odlawFound={odlawFound} wizardFound={wizardFound} elapsedTime={elapsedTime} username={username} handleSubmitClick={handleSubmitClick} handleInputChange={handleInputChange} isWin={isWin} isStart={isStart} setIsStart={setIsStart} handleTimerStart={handleTimerStart} setElapsedTime={setElapsedTime} /> } />
        <Route path='/leaderboard' element={ <Leaderboard leaderboard={leaderboard} setIsStart={setIsStart} setElapsedTime={setElapsedTime} /> } />
      </Routes>
    </div>
  );
}

export default App;