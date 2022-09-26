import { useContext } from "react";
import { GameContext } from "../GameContext";
import CountDown from './CountDown';
function Game() {
  const { getRandomWord, currentWord, dictionary } = useContext(GameContext);

  return (
    <div>
      {" "}
      {dictionary.length === 0 ? (
        <div></div>
      ) : (
        <div>
          {" "}
          {currentWord} <button onClick={getRandomWord}>Siguiente</button>{" "}
          <CountDown/>

        </div>
      )}
    </div>
  );
}

export default Game;
