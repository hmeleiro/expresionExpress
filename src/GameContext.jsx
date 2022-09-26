import  {useState, createContext } from "react";

export const GameContext = createContext();

export function GameContextProvider(props) {
  const [dictionary, setDictionary] = useState([]);
  const [currentWord, setCurrentWord] = useState("");

  function getRandomWord() {
    const r = Math.floor(Math.random() * dictionary.length);
    setCurrentWord(dictionary[r]);
  }
  return (
    <GameContext.Provider
      value={{
        dictionary,
        setDictionary,
        currentWord,
        setCurrentWord,
        getRandomWord,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
