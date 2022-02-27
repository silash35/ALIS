import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";

interface Props {
  id: string;
}

const DeletePlaceButton = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const keyInputRef = useRef<HTMLInputElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError(false);
    setErrorText("");
  };

  const deletePlace = async () => {
    const key = keyInputRef.current?.value;

    const data = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    };

    let res = {} as Response;
    if (key != "") {
      res = await fetch(`/api/place/${id}`, data);
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
      <IconButton aria-label="delete place" onClick={handleClickOpen}>
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
            inputRef={keyInputRef}
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
          <Button onClick={deletePlace} variant="outlined" color="primary">
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeletePlaceButton;
