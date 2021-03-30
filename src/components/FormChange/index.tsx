import Button from "@material-ui/core/Button";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { FormEvent, useContext } from "react";
import { useState } from "react";

import EditDialog from "@/components/EditDialog";
import { IPlace } from "@/types/IPlace";

import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./FormChange.module.scss";

interface Props {
  place: IPlace;
}

export default function FormChange({ place }: Props) {
  // Dialog
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
    setError(false);
    setErrorText("");
  };

  // Style
  const { theme } = useContext(ThemeContext);
  const common: TextFieldProps = { variant: "outlined", fullWidth: true };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    openDialog();
  };

  return (
    <form className={`${styles.card} ${styles[theme]}`} onSubmit={handleSubmit} id="formChange">
      <h2>Dados básicos do local</h2>
      <TextField defaultValue={place.name} name="name" label="Nome" required {...common} />
      <TextField
        defaultValue={place.address}
        name="address"
        label="Endereço"
        required
        {...common}
      />
      <TextField
        defaultValue={place.description}
        name="description"
        label="Descrição"
        multiline
        required
        {...common}
      />

      <h2>Informações extras</h2>
      <TextField
        defaultValue={place.email}
        name="email"
        label="Email do local"
        type="email"
        {...common}
      />
      <TextField
        defaultValue={place.phone}
        name="phone"
        label="Telefone do local"
        type="tel"
        inputProps={{ pattern: "[0-9,\\-,\\(,\\), ]{8,}" }}
        {...common}
      />
      <TextField
        defaultValue={place.website}
        name="website"
        label="Site do local"
        type="url"
        {...common}
      />
      <TextField
        defaultValue={place.imageURL}
        name="imageURL"
        label="Foto do local"
        helperText="Cole a URL de uma imagem da Web"
        type="url"
        {...common}
      />

      <Button variant="outlined" color="primary" size="large" type="submit">
        Atualizar
      </Button>

      <EditDialog
        open={open}
        handleClose={closeDialog}
        error={error}
        errorText={errorText}
        setError={setError}
        setErrorText={setErrorText}
        id={place._id}
      />
    </form>
  );
}
