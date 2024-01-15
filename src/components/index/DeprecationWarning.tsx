import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useId, useState } from "react";

const DeprecationWarning = () => {
  const [open, setOpen] = useState(true);

  const titleId = useId();
  const descriptionId = useId();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      aria-describedby={descriptionId}
      aria-labelledby={titleId}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle id={titleId}>Até mais, e Obrigado pelos Peixes!</DialogTitle>
      <DialogContent>
        <DialogContentText id={descriptionId}>
          Muita coisa mudou desde que o ALIS foi criado. Hoje, não consigo mais dedicar tempo ao
          projeto. O site continuará funcionando, mas lamentamos informar que não haverá mais
          atualizações ou novos recursos. Agradeço a compreensão e o apoio de todos que utilizaram o
          ALIS.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ margin: "16px" }} variant="outlined" autoFocus>
          Entendi
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeprecationWarning;
