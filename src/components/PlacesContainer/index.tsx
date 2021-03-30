import { IPlace } from "@/types/IPlace";

import PlaceCard from "../PlaceCard";
import styles from "./placesContainer.module.scss";

interface Props {
  places: IPlace[];
}

const PlacesContainer = ({ places }: Props) => {
  return (
    <section className={styles.container}>
      {places.map((place) => {
        return <PlaceCard place={place} key={place._id}></PlaceCard>;
      })}
    </section>
  );
};

export default PlacesContainer;
