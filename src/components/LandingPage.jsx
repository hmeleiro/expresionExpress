import { useContext } from "react";
import { GameContext } from "../GameContext";
import SelectDictionary from "./SelectDictionary";
import Game from './Game'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function LandingPage() {
  const { dictionary, setDictionary } = useContext(GameContext);

  function handleReturn() {
    setDictionary([]);
  }

  return (
    <>
      {dictionary.length === 0 ? (
        <div>
          <p className="text-center text-xl m-2 p-5 text-white">
            Esto es Expresión Exprés, un juego clásico de adivinar palabras a
            contrarreloj. Se juega en dos equipos posicionados en círculo, con
            los miembros de cada equipo intercalados entre sí. El móvil es una
            patata caliente: hay un tiempo limitado en cada ronda, el equipo que
            tenga el movil en la mano cuando el tiempo termina pierde, el equipo
            contrario gana un punto y puede ganar otro adicional si adivina la
            palabra.
          </p>
          <p className="text-center text-xl m-2 p-2 text-white">
            Para comenzar el juego haz clic seleccione un pack de palabras con
            las que jugar.
          </p>
          <SelectDictionary />
        </div>
      ) : (
        <>
        <Grid container justify="center">
          <Button
            sx={{ boxShadow: 5, borderRadius: 2, mx: 2, my: 2 }}
            variant="outlined"
            size="medium"
            onClick={handleReturn}
          >
            Volver
          </Button>
        </Grid>
        <Game />
        </>
      )}
    </>
  );
}

export default LandingPage;
