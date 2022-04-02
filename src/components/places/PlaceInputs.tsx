import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Place } from "@prisma/client";

interface Props {
  place?: Place;
}

export default function PlaceInputs({ place }: Props) {
  const common: TextFieldProps = { variant: "outlined", fullWidth: true };

  return (
    <>
      <h2>Dados básicos</h2>
      <TextField defaultValue={place?.name} name="name" label="Nome" required {...common} />
      <TextField
        defaultValue={place?.address}
        name="address"
        label="Endereço"
        required
        {...common}
      />
      <TextField
        defaultValue={place?.description}
        name="description"
        label="Descrição"
        multiline
        required
        {...common}
      />

      <h2>Informações extras</h2>
      <TextField
        defaultValue={place?.email}
        name="email"
        label="Email do local"
        type="email"
        {...common}
      />
      <TextField
        defaultValue={place?.phone}
        name="phone"
        label="Telefone do local"
        type="tel"
        inputProps={{ pattern: "[0-9,\\-,\\(,\\), ]{8,}" }}
        {...common}
      />
      <TextField
        defaultValue={place?.website}
        name="website"
        label="Site do local"
        type="url"
        {...common}
      />
      <TextField
        defaultValue={place?.imageURL}
        name="imageURL"
        label="Foto do local"
        helperText="Cole a URL de uma imagem da Web"
        type="url"
        {...common}
      />
    </>
  );
}
