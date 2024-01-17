import Love from "../../common/icons/Love";
import styles from "./aboutCard.module.scss";

const AboutCard = () => (
  <article className={styles.card}>
    <p>
      O ALIS é uma plataforma voltada para a comunidade surda a fim de minimizar as dificuldades
      desse público na procura de locais inclusivos. Aqui você pode contribuir registrando um lugar
      que você foi e tinha uma tecnologia pra facilitar a comunicação com surdos ou um interprete.
    </p>
    <Love />
  </article>
);

export default AboutCard;
