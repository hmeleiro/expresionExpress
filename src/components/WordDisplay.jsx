import { useContext } from "react";
import { GameContext } from "../GameContext";
import Button from "@mui/material/Button";
import React from "react";
import CountDown from "./CountDown";
import { Box } from "@mui/material";

function WordDisplay() {
  const { getRandomWord, currentWord } = useContext(GameContext);

  return (
    <>
      <div className="grid grid-rows-2 justify-center h-50">
        {/* <div className="h-24"> */}
          <h1 className="text-6xl font-extrabold mt-3 text-center text-white">
            {currentWord}{" "}
          </h1>
        {/* </div> */}

        <Box textAlign="center" sx={{ m: 2, p:0 }}>
          <Button
          color="button"
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
        </Box>
      </div>
      <div className="flex justify-center">
        <CountDown />
      </div>
    </>
  );
}

export default WordDisplay;
