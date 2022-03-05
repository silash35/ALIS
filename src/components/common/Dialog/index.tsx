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
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby={props.id}>
      <DialogTitle id={props.id}>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          cancelar
        </Button>
        <Button variant="outlined" color="primary" onClick={handleConfirmation}>
          {props.YesButtonText}
        </Button>
      </DialogActions>
      {loading ? <LinearProgress /> : <div className={styles.space} />}
    </Dialog>
  );
};

export default ConfirmationDialog;
