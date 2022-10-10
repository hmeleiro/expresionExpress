import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import Game from "./components/Game";
import SelectDictionary from "./components/SelectDictionary";
import { GameContextProvider } from "./GameContext";

function App() {
  return (
    <div className="h-screen">
      <GameContextProvider>
        <div>
          <SelectDictionary />
          <Game />
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App;
