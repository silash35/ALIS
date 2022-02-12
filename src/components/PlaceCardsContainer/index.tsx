import { Place } from "@prisma/client";

import PlaceCard from "./Card";
import styles from "./placeCardsContainer.module.scss";

interface Props {
  places: Place[];
}

const PlaceCardsContainer = ({ places }: Props) => {
  return (
    <section className={styles.container}>
      {places.map((place) => {
        return <PlaceCard place={place} key={place.id}></PlaceCard>;
      })}
    </section>
  );
};

export default PlaceCardsContainer;
