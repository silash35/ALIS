import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";
import { IPlace } from "@/types/IPlace";

import PlaceEdit from "../PlaceEditButton";
import styles from "./place.module.scss";

interface Props {
  place: IPlace;
}

export default function Place({ place }: Props) {
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
