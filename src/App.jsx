import React, { useState } from "react";
import words from "./assets/basic.json";

function App() {
  const [dictionary, setDictionary] = useState(words);
  const [currentWord, setCurrentWord] = useState("");

  function getRandomWord() {
    const r = Math.floor(Math.random() * dictionary.length);
    setCurrentWord(dictionary[r]);
  }

  return (
    <div>
      {" "}
      {currentWord}
      <button onClick={getRandomWord}>Siguiente</button>
    </div>
  );
}

export default App;
