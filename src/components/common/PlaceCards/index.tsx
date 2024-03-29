import CircularProgress from "@mui/material/CircularProgress";
import { Place } from "@prisma/client";

import TPlaces from "../../index/TPlaces";
import Card from "./Card";
import styles from "./cards.module.scss";

interface CardsContainerProps {
  places: Place[];
}

const CardsContainer = ({ places }: CardsContainerProps) => (
  <section className={styles.container}>
    {places.map((place) => {
      return <Card key={place.id} place={place}></Card>;
    })}
  </section>
);

interface CardsProps {
  places: TPlaces;
}

const PlaceCards = ({ places }: CardsProps) => {
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

export default PlaceCards;
