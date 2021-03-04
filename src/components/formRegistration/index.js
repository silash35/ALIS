import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./formRegistration.module.scss";

export default function FormRegistration() {
  const { theme } = useContext(ThemeContext);

  return (
    <form className={`${styles.card} ${styles[theme]}`} action="/api/places" method="POST">
      <TextField name="personName" label="Seu Nome" variant="outlined" fullWidth />
      <br />
      <TextField name="email" label="Seu E-Mail" variant="outlined" type="email" fullWidth />
      <br />
      <TextField name="name" label="Nome do Local" variant="outlined" required fullWidth />
      <br />
      <TextField name="address" label="Endereço do Local" variant="outlined" required fullWidth />
      <br />
      <TextField
        name="key"
        label="Chave para alteração"
        variant="outlined"
        type="password"
        required
        fullWidth
      />
      <br />
      <TextField
        name="description"
        label="Descrição do local"
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
