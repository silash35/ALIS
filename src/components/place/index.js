import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import PlaceEdit from "../placeEdit";
import styles from "./place.module.scss";

export default function Place({ place }) {
  const { theme } = useContext(ThemeContext);

  return (
    <article
      className={`${styles.card} ${styles[theme]}`}
      style={{ backgroundImage: "url(/images/empty.png)" }}
    >
      <div className={styles.content}>
        <h2>{place.name}</h2>
        <PlaceEdit id={place._id} />
      </div>
    </article>
  );
}
