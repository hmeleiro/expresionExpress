import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import Game from "./components/Game";
import SelectDictionary from "./components/SelectDictionary";
import { GameContextProvider } from "./GameContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#d90429",
  },
  palette: {
    primary: {
      main: "#edf2f4",
      darker: "#8d99ae",
    },
    neutral: {
      main: "#8d99ae",
      contrastText: "#edf2f4",
    },
    background: {
      main: "#2b2d42"
    },
    button: {
      main: "#ffffff"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen bg-stone-700">
        <GameContextProvider>
          <div>
            <SelectDictionary />
            <Game />
          </div>
        </GameContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
