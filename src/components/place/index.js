import Image from "next/image";

import PlaceEdit from "../placeEdit";
import styles from "./place.module.scss";

export default function Place({ place }) {
  return (
    <article className={styles.card} style={{ backgroundImage: "url(/images/empty.png)" }}>
      <div className={styles.content}>
        <h2>{place.name}</h2>
        <PlaceEdit id={place._id} />
      </div>
    </article>
  );
}
