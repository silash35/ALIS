import CircularProgress from "@mui/material/CircularProgress";
import { Place } from "@prisma/client";

import TPlaces from "../TPlaces";
import Card from "./Card";
import styles from "./cards.module.scss";

interface CardsContainerProps {
  places: Place[];
}

const CardsContainer = ({ places }: CardsContainerProps) => {
  return (
    <section className={styles.container}>
      {places.map((place) => {
        return <Card place={place} key={place.id}></Card>;
      })}
    </section>
  );
};

interface CardsProps {
  places: TPlaces;
}

const Cards = ({ places }: CardsProps) => {
  if (Array.isArray(places) && places.length > 0) {
    return <CardsContainer places={places} />;
  } else if (places === "NotFound") {
    return <div className={styles.container}>Nenhum local encontrado</div>;
  } else {
    return (
      <div className={styles.container}>
        <CircularProgress />
      </div>
    );
  }
};

export default Cards;
