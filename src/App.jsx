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
      main: "#ffffff",
      darker: "#ffffff",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#ffffff",
    },
    error: {
      main: "#c90000"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen bg-gray-600">
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
