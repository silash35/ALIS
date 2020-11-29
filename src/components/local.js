import IconButton from "@material-ui/core/IconButton";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import DeleteIcon from "@material-ui/icons/Delete";

export default function Local(props) {
  let local = props.local;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteLocal = async (_id) => {
    const chave = document.getElementById("chave-" + _id).value;
    const data = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id, chave }),
    };

    await fetch("/api/local", data);
    window.location.href = "/";
    handleClose();
  };

  return (
    <article className="card">
      <h2>{local.nome}</h2>
      <section>
        <p>Descrição: {local.descrição}</p>
        <p>Endereço: {local.endereço}</p>
      </section>
      <IconButton
        aria-label="delete"
        className="corner"
        onClick={handleClickOpen}
      >
        <DeleteIcon fontSize="large" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Digite a chave do local
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para excluir um local, você precisa da chave cadastrada.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id={"chave-"+local._id}
            label="chave"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancelar
          </Button>
          <Button onClick={() => deleteLocal(local._id)} color="primary">
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}
