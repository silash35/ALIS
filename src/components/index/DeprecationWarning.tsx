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
          É com pesar que informo sobre a descontinuação do ALIS. Hoje, não consigo mais dedicar
          tempo ao projeto e decidi encerrar o seu suporte e desenvolvimento. O site irá continuar
          no ar, mas não receberá mais atualizações, correções de bugs ou novos recursos. Agradeço a
          compreensão e o apoio de todos que utilizaram o ALIS.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ margin: "8px", marginTop: 0 }}
          variant="outlined"
          autoFocus
        >
          Entendi
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeprecationWarning;
