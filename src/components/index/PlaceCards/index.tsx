import CircularProgress from "@mui/material/CircularProgress";
import { Place } from "@prisma/client";
import useSWR from "swr";

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

const PlaceCards = ({ places }: Props) => {
  const { data } = useSWR(!(places.length > 0) ? "/api/places" : null);

  if (places.length > 0) {
    return <PlaceCardsContainer places={places} />;
  } else if (data?.body) {
    return <PlaceCardsContainer places={data.body} />;
  } else {
    return (
      <div className={styles.container}>
        <CircularProgress />
      </div>
    );
  }
};

export default PlaceCards;
