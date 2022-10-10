import { useContext } from "react";
import { GameContext } from "../GameContext";
import Button from "@mui/material/Button";
import React from "react";
import CountDown from "./CountDown";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#d90429",
  },
  palette: {
    primary: {
      main: "#d90429",
      darker: "#d90429",
    },
    neutral: {
      main: "#d90429",
      contrastText: "#fff",
    },
  },
});

function WordDisplay() {
  const { getRandomWord, currentWord } = useContext(GameContext);

  return (
    <>
      <div className="grid grid-rows-2 justify-center h-40">
        <div className="h-24">
          <h1 className="text-6xl font-extrabold mt-3 text-center text-white">
            {currentWord}{" "}
          </h1>
        </div>

        <Box textAlign="center" sx={{ m: 2 }}>
          <ThemeProvider theme={theme}>
            <Button
              justifyContent="center"
              color="primary"
              sx={{
                boxShadow: 8,
                borderRadius: 2,
                maxWidth: "400px",
                minWidth: "400px",
                maxHeight: "50px",
                minHeight: "50px",
              }}
              variant="contained"
              size="large"
              onClick={getRandomWord}
            >
              Siguiente palabra
            </Button>
          </ThemeProvider>
        </Box>
      </div>
      <div className="flex justify-center">
        <CountDown />
      </div>
    </>
  );
}

export default WordDisplay;
