import CircularProgress from "@mui/material/CircularProgress";
import { Place } from "@prisma/client";
import useSWR from "swr";

import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import PlaceImage from "./Image";
import styles from "./placeInformation.module.scss";
import ShareButton from "./ShareButton";

interface Props {
  id: string;
  setPlaceExists(placeExists: boolean): void;
}

export default function PlaceInformation({ id, setPlaceExists }: Props) {
  const { data, error } = useSWR("/api/place?id=" + id);
  const place = data?.body as Place;

  console.log(place);

  if (error) {
    setPlaceExists(false);
  }

  if (!place) {
    return (
      <article className={styles.loading}>
        <CircularProgress />
      </article>
    );
  }

  return (
    <article className={styles.container}>
      {place.imageURL && <PlaceImage src={place.imageURL} name={place.name} />}

      <div className={styles.title}>
        <h1>{place.name}</h1>
      </div>

      <section className={styles.content}>
        <p>{place.description}</p>
        <p>Endereço: {place.address}</p>

        {place.phone && (
          <p>
            Telefone:
            <a href={`mailto:${place.phone}`} title={`Phone number of ${place.phone}`}>
              {place.phone}
            </a>
          </p>
        )}
        {place.email && (
          <p>
            Email:
            <a href={`mailto:${place.email}`} title={`${place.name}'s e-mail address`}>
              {place.email}
            </a>
          </p>
        )}
        {place.website && (
          <p>
            Site:
            <a
              href={place.website}
              title={`${place.name}'s website`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {place.website}
            </a>
          </p>
        )}
      </section>

      <section className={styles.buttons}>
        <EditButton id={place.id} />
        <DeleteButton id={place.id} />
        <ShareButton />
      </section>
    </article>
  );
}
