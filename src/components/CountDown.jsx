import React, { useState, useEffect } from "react";
import beep1 from "../assets/beep.mp3";
import beepFinal from "../assets/beep-final.mp3";
import useSound from "use-sound";
import playIcon from '../assets/start-white.png'
import resetIcon from '../assets/reset-white.png' 
import pauseIcon from '../assets/pause-white.png' 


function CountDown() {
  const [remainingTime, setRemainingTime] = useState(getRandomInt(90, 120));
  const [isStopped, setIsStopped] = useState(true);
  const [limit10, setLimit10] = useState(getRandomInt(21, 30));
  const [limit5, setLimit5] = useState(getRandomInt(10, 20));

  const [beep] = useSound(beep1, { volume: 0.5 });
  const [buzz] = useSound(beepFinal, { volume: 0.1 });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function numericRamp(time, limit5, limit10) {
    switch (true) {
      case time < limit5:
        return 250;
      case time < limit10:
        return 500;
      default:
        return 1000;
    }
  }

  function secondDown() {
    setRemainingTime(remainingTime - 1);
    remainingTime === 0 ? buzz() : beep();
  }

  useEffect(() => {
    !isStopped &&
      remainingTime >= 0 &&
      setTimeout(secondDown, numericRamp(remainingTime, limit5, limit10));
  }, [remainingTime, isStopped]);

  function handleStart() {
    if (remainingTime === 0) {
      setRemainingTime(getRandomInt(80, 100));
      setIsStopped(false);
    } else {
      setIsStopped(false);
    }
  }

  function handlePause() {
    setIsStopped(true);
  }
  function handleReset() {
    setRemainingTime(getRandomInt(80, 100));
    setIsStopped(true);
    setLimit10(getRandomInt(21, 30))
    setLimit5(getRandomInt(10, 20))
  }

  return (
    <>
      {/* <div id="countdown">
        <div id="countdown-number">{remainingTime} </div>
      </div> */}
      <button id="pause" onClick={handlePause}>
        <img src={pauseIcon} width="60px" className="m-2"/>
      </button>
      <button id="start" onClick={handleStart}>
        <img src={playIcon} width="60px" className="m-2"/>
      </button>
      <button id="reset" onClick={handleReset}>
        <img src={resetIcon} width="60px" className="m-2"/>
      </button>
    </>
  );
}

export default CountDown;
