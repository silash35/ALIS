import { IPlace } from "@/types/IPlace";

import PlaceCard from "./Card";
import styles from "./placeCardsContainer.module.scss";

interface Props {
  places: IPlace[];
}

const PlaceCardsContainer = ({ places }: Props) => {
  return (
    <section className={styles.container}>
      {places.map((place) => {
        return <PlaceCard place={place} key={place._id}></PlaceCard>;
      })}
    </section>
  );
};

export default PlaceCardsContainer;
