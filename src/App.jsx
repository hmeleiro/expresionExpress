import React, { useState } from "react";
import Game from "./components/Game";
import SelectDictionary from './components/SelectDictionary';
import { GameContextProvider } from "./GameContext";

function App() {
  return (
    <>
      <GameContextProvider>
        <SelectDictionary />
        <Game/>
      </GameContextProvider>
    </>
  );
}

export default App;
