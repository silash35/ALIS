import { IPlace } from "@/types/IPlace";

import Place from "../Place";
import styles from "./placesContainer.module.scss";

interface Props {
  places: IPlace[];
}

const PlacesContainer = ({ places }: Props) => {
  return (
    <section className={styles.container}>
      {places.map((place) => {
        return <Place place={place} key={place._id}></Place>;
      })}
    </section>
  );
};

export default PlacesContainer;
