import { useContext } from "react";
import { GameContext } from "../GameContext";
import dictionaries from "../assets/dics.json";

function SelectDictionary() {
  const { dictionary, setDictionary } = useContext(GameContext);
  const dictionaryNames = Object.keys(dictionaries);

  function handleSelectDictionary(event) {
    console.log(dictionaries[event.target.value]);
    setDictionary(dictionaries[event.target.value]);
  }

  function handleReturn() {
    setDictionary([]);
  }

  return (
    <>
      {dictionary.length === 0 ? (
        <div className="select-container">
          <select onChange={handleSelectDictionary}>
            {dictionaryNames.map((option, i) => (
              <option value={option} key={i}>
                {option}{" "}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <button onClick={handleReturn}>Volver</button>
      )}
    </>
  );
}

export default SelectDictionary;
