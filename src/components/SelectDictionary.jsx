import { useContext } from "react";
import { GameContext } from "../GameContext";
import dictionaries from "../assets/dics.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

function SelectDictionary() {
  const { dictionary, setDictionary, setCurrentWord } = useContext(GameContext);
  const dictionaryNames = Object.keys(dictionaries)
  dictionaryNames.splice(0, 1);
  

  function handleSelectDictionary(event) {
    setCurrentWord("");
    setDictionary(dictionaries[event.target.value]);
  }

  return (
    <div>
      <Box display="flex" height={100} justifyContent="center">
        <FormControl
          variant="filled"
          sx={{
            m: 1,
            minWidth: 250,
            alignSelf: "center",
            backgroundColor: "button.main",
            outlineColor: "#af0000",
            borderColor: "#af0000",
            boxShadow: 4,
            borderRadius: 2,
          }}
          size="small"
        >
          <InputLabel id="select-small" sx={{ color: "black" }}>
            Selecciona un diccionario
          </InputLabel>
          <Select
            defaultValue = ""
            labelId="select-small"
            id="select-small"
            value={dictionary}
            label="Pack"
            onChange={handleSelectDictionary}
          >
            {dictionaryNames.map((option, i) => (
              <MenuItem value={option} key={i}>
                {option}{" "}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default SelectDictionary;
