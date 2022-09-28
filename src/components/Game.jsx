import { useContext } from "react";
import { GameContext } from "../GameContext";
import CountDown from './CountDown';
import Button from '@mui/material/Button';

function Game() {
  const { getRandomWord, currentWord, dictionary } = useContext(GameContext);

  return (
    <div>
      {" "}
      {dictionary.length === 0 ? (
        <div></div>
      ) : (
        <div className="flex flex-wrap -mb-1">
          {" "}
          <h1 className="text-6xl font-extrabold m-6">{currentWord} </h1> 
        
          
          <Button sx={{ boxShadow:5, borderRadius:2, mx:2, my:2 }} variant="outlined" size="medium" onClick={getRandomWord}>Siguiente</Button>{" "}
          <CountDown/>

        </div>
      )}
    </div>
  );
}

export default Game;
