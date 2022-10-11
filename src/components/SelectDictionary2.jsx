import { useContext, useState } from "react";
import { GameContext } from "../GameContext";
import dictionaries from "../assets/dics.json";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const dictionaryNames = Object.keys(dictionaries);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} container={() => document.getElementsByClassName('fullscreen')}>
      <DialogTitle>Selecciona un diccionario</DialogTitle>
      <List sx={{ pt: 0 }}>
        {dictionaryNames.map((option, i) => (
          <ListItem 
            button
            onClick={() => handleListItemClick(option)}
            key={option}
          >
            <ListItemText primary={option} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function SelectDictionary2() {
  const [open, setOpen] = useState(false);
  //   const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const { dictionary, setDictionary, setCurrentWord } = useContext(GameContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    if (value?.length > 0) {
      setCurrentWord("");
      setDictionary(dictionaries[value]);
    }
  };

  return (
    <div>
      <Box display="flex" height={40} justifyContent="center">
        <Button variant="outlined" onClick={handleClickOpen}>
          Selecciona diccionario
        </Button>
      </Box>

      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}

export default SelectDictionary2;
