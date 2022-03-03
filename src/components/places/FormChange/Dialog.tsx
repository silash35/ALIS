import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Props {
  open: boolean;
  id: string;
  form: HTMLFormElement;
  handleClose: () => void;
}

const EditDialog = (props: Props) => {
  const sendData = async () => {
    const formData = new FormData(props.form);
    const formDataObject = Object.fromEntries(formData);

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ place: formDataObject }),
    };

    const res = await fetch(`/api/protected/place/${props.id}`, data);

    if (res.status == 200) {
      props.handleClose();
      window.location.href = `/places/${props.id}`;
    }
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        Você tem certeza que deseja editar esse local?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Não será possível reverter as mudanças.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          cancelar
        </Button>
        <Button variant="outlined" color="primary" onClick={sendData}>
          Salvar Alterações
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
