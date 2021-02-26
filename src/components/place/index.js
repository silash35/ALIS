import PlaceEdit from "../placeEdit";
import styles from "./place.module.scss";

export default function Place({ place }) {
  return (
    <article className={styles.card}>
      <h2>{place.name}</h2>
      <section>
        <p>Descrição: {place.description}</p>
        <p>Endereço: {place.address}</p>
      </section>
      <PlaceEdit id={place._id} />
    </article>
  );
}
