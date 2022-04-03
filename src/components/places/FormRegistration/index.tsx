import Button from "@mui/material/Button";

import PlaceInputs from "@/components/places/PlaceInputs";

import styles from "./formRegistration.module.scss";

export default function FormRegistration() {
  return (
    <form className={styles.card} action="/api/protected/places" method="POST">
      <PlaceInputs />

      <p className={styles.small}>
        Seu endereço de email será visível para quem acessar a página desse local
      </p>

      <Button variant="outlined" color="primary" size="large" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
