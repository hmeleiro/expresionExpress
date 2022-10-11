import { useState, useContext, useRef } from "react";
import { GameContext } from "../GameContext";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import dictionaries from "../assets/dics.json";

export default function BasicMenu() {
  const ref = useRef();
  const { setDictionary, setCurrentWord } = useContext(GameContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dictionaryNames = Object.keys(dictionaries);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentWord("");
    setDictionary([]);
  };

  function handleSelectDictionary(event) {
    console.log(event);
    console.log(dictionaries);
    setCurrentWord("");
    setDictionary(dictionaries[event.target.value]);
  }

  return (
    <div ref={ref}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        container={ref.current}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {dictionaryNames.map((option, i) => (
          <MenuItem
            value={option}
            key={option}
            onClick={handleSelectDictionary}
          >
            {option}{" "}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
