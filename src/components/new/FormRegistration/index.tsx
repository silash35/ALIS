import Button from "@mui/material/Button";
import TextField, { TextFieldProps } from "@mui/material/TextField";

import styles from "./formRegistration.module.scss";

export default function FormRegistration() {
  const common: TextFieldProps = { variant: "outlined", fullWidth: true };

  return (
    <form className={styles.card} action="/api/protected/places" method="POST">
      <h2>Dados básicos</h2>
      <TextField name="name" label="Nome" required {...common} />
      <TextField name="address" label="Endereço" required {...common} />
      <TextField name="description" label="Descrição" multiline required {...common} />

      <h2>Informações extras</h2>
      <TextField name="email" label="Email do local" {...common} type="email" />
      <TextField
        name="phone"
        label="Telefone do local"
        type="tel"
        {...common}
        inputProps={{ pattern: "[0-9,\\-,\\(,\\), ]{8,}" }}
      />
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