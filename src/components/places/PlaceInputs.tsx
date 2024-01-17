import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Place } from "@prisma/client";

interface Props {
  place?: Place;
}

const PlaceInputs = ({ place }: Props) => {
  const common: TextFieldProps = { variant: "outlined", fullWidth: true };

  return (
    <>
      <h2>Dados básicos</h2>
      <TextField defaultValue={place?.name} label="Nome" name="name" required {...common} />
      <TextField
        defaultValue={place?.address}
        label="Endereço"
        name="address"
        required
        {...common}
      />
      <TextField
        defaultValue={place?.description}
        label="Descrição"
        name="description"
        multiline
        required
        {...common}
      />

      <h2>Informações extras</h2>
      <TextField
        defaultValue={place?.email}
        label="Email do local"
        name="email"
        type="email"
        {...common}
      />
      <TextField
        defaultValue={place?.phone}
        inputProps={{ pattern: "[0-9,\\-,\\(,\\), ]{8,}" }}
        label="Telefone do local"
        name="phone"
        type="tel"
        {...common}
      />
      <TextField
        defaultValue={place?.website}
        label="Site do local"
        name="website"
        type="url"
        {...common}
      />
      <TextField
        defaultValue={place?.imageURL}
        helperText="Cole a URL de uma imagem da Web"
        label="Foto do local"
        name="imageURL"
        type="url"
        {...common}
      />
    </>
  );
};

export default PlaceInputs;
