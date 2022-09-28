import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import Game from "./components/Game";
import SelectDictionary from "./components/SelectDictionary";
import { GameContextProvider } from "./GameContext";

function App() {
  return (
    <div className="h-screen place-items-center w-auto m-10">
      <GameContextProvider>
        <div className="grid-cols-1">
          <SelectDictionary />
          <Game />
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App;
