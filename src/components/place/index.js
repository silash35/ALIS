import PlaceEdit from "../placeEdit";
import styles from "./place.module.scss";

export default function Place({ place }) {
  return (
    <article className={styles.card}>
      <h2>{place.nome}</h2>
      <section>
        <p>Descrição: {place.descrição}</p>
        <p>Endereço: {place.endereço}</p>
      </section>
      <PlaceEdit id={place._id} />
    </article>
  );
}
