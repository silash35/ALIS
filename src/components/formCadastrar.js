import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function FormCadastrar() {
  return (
    <form className="card" action="/api/local" method="POST">
      <TextField name="nomeDaPessoa" label="Seu Nome" variant="outlined" fullWidth />
      <br />
      <TextField name="email" label="Seu E-Mail" variant="outlined" type="email" fullWidth />
      <br />
      <TextField name="nome" label="Nome do Local" variant="outlined" required fullWidth />
      <br />
      <TextField name="endereço" label="Endereço do Local" variant="outlined" required fullWidth />
      <br />
      <TextField
        name="chave"
        label="Chave para alteração"
        variant="outlined"
        type="password"
        required
        fullWidth
      />
      <br />
      <TextField
        name="descrição"
        label="Descrição"
        variant="outlined"
        multiline
        required
        fullWidth
      />
      <br />
      <Button variant="outlined" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
