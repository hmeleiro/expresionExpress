import React, { useState, useEffect } from "react";
import beep1 from "../assets/beep.mp3";
import beepFinal from "../assets/beep-final.mp3";
import useSound from "use-sound";

function CountDown() {
  const [remainingTime, setRemainingTime] = useState(10);
  const [isStopped, setIsStopped] = useState(true);
  useEffect(() => {
    !isStopped &&
      remainingTime >= 0 &&
      setTimeout(
        () => setRemainingTime(remainingTime - 1),
        remainingTime < 5 ? 500 : 1000,
        remainingTime === 0 ? buzz() : beep()
      );
  }, [remainingTime, isStopped]);

  const [beep] = useSound(beep1, { volume: 0.25 });
  const [buzz] = useSound(beepFinal, { volume: 0.1 });

  function handleStart() {
    if (remainingTime === 0) {
      setRemainingTime(4);
      setIsStopped(false);
    } else {
      setIsStopped(false);
    }
  }

  function handlePause() {
    setIsStopped(true);
  }
  function handleReset() {
    setRemainingTime(30);
    setIsStopped(true);
  }

  return (
    <>
      <div id="countdown">
        <div id="countdown-number">{remainingTime} </div>
      </div>
      <button id="pause" onClick={handlePause}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/pause--v1.png" />
      </button>
      <button id="start" onClick={handleStart}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/play--v1.png" />
      </button>
      <button id="reset" onClick={handleReset}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/stop.png" />
      </button>
    </>
  );
}

export default CountDown;
