import PlaceImage from "@/components/PlaceImage";
import { IPlace } from "@/types/IPlace";

import styles from "./placeInformation.module.scss";

interface Props {
  place: IPlace;
}

export default function PlaceInformation({ place }: Props) {
  return (
    <article className={styles.container}>
      <PlaceImage src="/images/empty.png" alt="Logo do alis (a letra a) com fundo preto" />

      <div className={styles.title}>
        <h1>{place.name}</h1>
      </div>

      <div className={styles.content}>
        <section>
          <p>{place.description}</p>
          <p>Endereço: {place.address}</p>
        </section>
      </div>
    </article>
  );
}
