import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";

import styles from "./deleteButton.module.scss";

interface Props {
  id: string;
}

const DeletePlaceButton = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePlace = async () => {
    const data = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    setLoading(true);
    const res = await fetch(`/api/place/${id}`, data);
    setLoading(false);

    if (res.status == 200) {
      handleClose();
      window.location.href = "/";
    }
  };

  return (
    <>
      <IconButton aria-label="delete place" onClick={handleClickOpen}>
        <DeleteIcon fontSize="large" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Você tem certeza que deseja deletar esse local?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Todo o conteúdo será perdido para sempre</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancelar
          </Button>
          <Button onClick={deletePlace} variant="outlined" color="primary">
            Deletar
          </Button>
        </DialogActions>
        {loading ? <LinearProgress /> : <div className={styles.space} />}
      </Dialog>
    </>
  );
};

export default DeletePlaceButton;
