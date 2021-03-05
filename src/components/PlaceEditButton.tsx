import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";

interface Props {
  id: string;
}

const PlaceEditButton = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError(false);
    setErrorText("");
  };

  const editPlace = async () => {
    const key = (document.getElementById("chave-" + id) as HTMLInputElement).value;

    const data = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, key }),
    };

    let res = { status: undefined };
    if (key != "") {
      res = await fetch("/api/places", data);
    } else {
      res.status = 401;
    }

    if (res.status == 200) {
      handleClose();
      window.location.href = "/";
    } else {
      setError(true);
      setErrorText("Senha incorreta");
    }
  };

  return (
    <>
      <IconButton aria-label="delete" className="corner" onClick={handleClickOpen}>
        <DeleteIcon fontSize="large" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Digite a chave do local</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para excluir um local, você precisa da chave cadastrada.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id={"chave-" + id}
            label="chave"
            type="password"
            fullWidth
            error={error}
            helperText={errorText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancelar
          </Button>
          <Button onClick={editPlace} variant="outlined" color="primary">
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PlaceEditButton;
