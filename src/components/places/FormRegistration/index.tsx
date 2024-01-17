import Button from "@mui/material/Button";

import PlaceInputs from "@/components/places/PlaceInputs";

import styles from "./formRegistration.module.scss";

const FormRegistration = () => (
  <form action="/api/protected/places" className={styles.card} method="POST">
    <PlaceInputs />

    <p className={styles.small}>
      Seu endereço de email será visível para quem acessar a página desse local
    </p>

    <Button color="primary" size="large" type="submit" variant="outlined">
      Cadastrar
    </Button>
  </form>
);

export default FormRegistration;
