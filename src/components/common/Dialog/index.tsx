import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";

import styles from "./dialog.module.scss";

interface Props {
  open: boolean;
  handleClose: () => void;
  onConfirmation: () => Promise<void>;

  title: string;
  text: string;
  YesButtonText: string;
  id: string;
}

const ConfirmationDialog = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const handleConfirmation = async () => {
    setLoading(true);
    await props.onConfirmation();
    setLoading(false);
  };

  return (
    <Dialog aria-labelledby={props.id} onClose={props.handleClose} open={props.open}>
      <DialogTitle id={props.id}>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.handleClose}>
          cancelar
        </Button>
        <Button color="primary" onClick={handleConfirmation} variant="outlined">
          {props.YesButtonText}
        </Button>
      </DialogActions>
      {loading ? <LinearProgress /> : <div className={styles.space} />}
    </Dialog>
  );
};

export default ConfirmationDialog;
