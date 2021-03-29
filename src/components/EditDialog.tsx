import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

interface Props {
  open: boolean;
  id: string;
  error: boolean;
  errorText: string;
  setError: (boolean) => void;
  setErrorText: (string) => void;
  handleClose: () => void;
}

const EditDialog = (props: Props) => {
  const sendData = async () => {
    const form = document.querySelector("#formChange") as HTMLFormElement;
    const key = document.querySelector("#key") as HTMLInputElement;
    const formData = new FormData(form);

    const formDataObject = {};
    formData.forEach((value, key) => {
      if (value != "") {
        formDataObject[key] = value;
      }
    });

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ place: formDataObject, id: props.id, key: key.value }),
    };

    let res = { status: undefined };
    if (key.value != "") {
      res = await fetch(`/api/place?id=${props.id}`, data);
    } else {
      res.status = 401;
    }

    if (res.status == 200) {
      props.handleClose();
      window.location.href = `/locais/${props.id}`;
    } else {
      props.setError(true);
      props.setErrorText("Senha incorreta");
    }
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Digite a chave do local</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Para editar um local, você precisa da chave cadastrada.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="chave"
          type="password"
          id="key"
          fullWidth
          error={props.error}
          helperText={props.errorText}
        />
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
