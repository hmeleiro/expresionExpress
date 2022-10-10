import { useContext } from "react";
import { GameContext } from "../GameContext";
import WordDisplay from "./WordDisplay";

function Game() {
  const { dictionary } = useContext(GameContext);

  return (
    <div>
      {" "}
      {dictionary.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <WordDisplay />
        </div>
      )}
    </div>
  );
}

export default Game;
