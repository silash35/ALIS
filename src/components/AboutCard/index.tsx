import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";

import Love from "../icons/Love";
import styles from "./aboutCard.module.scss";

export default function AboutCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <article className={`${styles.card} ${styles[theme]}`}>
      <p>
        O ALIS é uma plataforma voltada para a comunidade surda a fim de minimizar as dificuldades
        desse público na procura de locais inclusivos. Aqui você pode contribuir registrando um
        lugar que você foi e tinha uma tecnologia pra facilitar a comunicação com surdos ou
        interprete.
      </p>
      <Love />
    </article>
  );
}
