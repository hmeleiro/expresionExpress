import React from "react";
import { GameContextProvider } from "./GameContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import LandingPage from "./components/LandingPage";

const theme = createTheme({
  status: {
    danger: "#d90429",
  },
  palette: {
    primary: {
      main: "#000000",
      darker: "#8d99ae",
    },
    neutral: {
      main: "#8d99ae",
      contrastText: "#edf2f4",
    },
    background: {
      main: "#2b2d42",
    },
    button: {
      main: "#ffffff",
    },
  },
});

function App() {
  const handleFs = useFullScreenHandle();

  return (
    <ThemeProvider theme={theme}>
      <main className="flex flex-wrap h-screen w-screen bg-stone-800">
        <GameContextProvider>
          <div className="container mx-auto">
            {/* <button
              className="text-white rounded bg-slate-500 m-4 p-4"
              onClick={handleFs.enter}
            >
              Pantalla completa
            </button> */}

            {/* <FullScreen id ="fsprueba" handle={handleFs}> */}
            <LandingPage />
              
              
            {/* </FullScreen> */}
          </div>
        </GameContextProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
