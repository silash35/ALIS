import Button from "@material-ui/core/Button";
import Share from "@material-ui/icons/Share";

import styles from "./ShareButton.module.scss";

const DeletePlaceButton = () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        id={styles.button}
        size="large"
        startIcon={<Share />}
      >
        Compartilhar
      </Button>
    </>
  );
};

export default DeletePlaceButton;
