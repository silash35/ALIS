import Button from "@material-ui/core/Button";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./formRegistration.module.scss";

export default function FormRegistration() {
  const { theme } = useContext(ThemeContext);

  const common: TextFieldProps = { variant: "outlined", fullWidth: true };

  return (
    <form className={`${styles.card} ${styles[theme]}`} action="/api/places" method="POST">
      <h2>Seus dados</h2>
      <TextField name="userName" label="Seu Nome" required {...common} />
      <TextField name="userMail" label="Seu E-Mail" type="email" required {...common} />

      <h2>Dados básicos do local</h2>
      <TextField name="name" label="Nome" required {...common} />
      <TextField name="address" label="Endereço" required {...common} />
      <TextField name="description" label="Descrição" multiline required {...common} />
      <TextField
        name="key"
        label="Chave para alteração"
        helperText="Autenticação para editar as informações cadastradas"
        type="password"
        required
        {...common}
      />

      <h2>Informações extras</h2>
      <TextField name="email" label="Email do local" {...common} />
      <TextField name="phone" label="Telefone do local" {...common} />
      <TextField name="website" label="Site do local" type="url" {...common} />
      <TextField
        name="imageURL"
        label="Foto do local"
        helperText="Cole a URL de uma imagem da Web"
        type="url"
        {...common}
      />

      <Button variant="outlined" color="primary" size="large" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
