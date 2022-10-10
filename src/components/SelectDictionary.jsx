import { useContext } from "react";
import { GameContext } from "../GameContext";
import dictionaries from "../assets/dics.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function SelectDictionary() {
  const { dictionary, setDictionary, setCurrentWord} = useContext(GameContext);
  const dictionaryNames = Object.keys(dictionaries);

  function handleSelectDictionary(event) {
    setCurrentWord("");
    setDictionary(dictionaries[event.target.value]);
  }

  function handleReturn() {
    setDictionary([]);
  }

  return (
    <>
      {dictionary.length === 0 ? (
        <>
          <p className="text-center m-4 p-0">
            Esto es Expresión Exprés, un juego clásico de adivinar palabras a
            contrarreloj. Se juega en dos equipos posicionados en círculo, con
            los miembros de cada equipo intercalados entre sí. El móvil es una
            patata caliente: hay un tiempo limitado en cada ronda, el equipo que
            tenga el movil en la mano cuando el tiempo termina pierde, el equipo
            contrario gana un punto y puede ganar otro adicional si adivina la
            palabra.
          </p>
          <p className="text-center m-2 p-0">
            Para comenzar el juego haz clic seleccione un pack de palabras con
            las que jugar.
          </p>

          <Box
            display="flex"
            height={100}
            justifyContent="center"
          >
            <FormControl
              sx={{ m: 1, minWidth: 150, alignSelf: "center" }}
              size="small"
            >
              <InputLabel id="select-small">Palabras</InputLabel>
              <Select
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
        </>
      ) : (
        <Grid container justify="center">
          <Button sx={{ boxShadow:5, borderRadius:2, mx:2, my:2 }} variant="outlined" size="medium" onClick={handleReturn}>
            Volver
          </Button>
        </Grid>
      )}
    </>
  );
}

export default SelectDictionary;
