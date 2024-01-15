import CircularProgress from "@mui/material/CircularProgress";
import { Place } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
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

const PlaceInformation = ({ id, setPlaceExists }: Props) => {
  const [allowEdit, setAllowEdit] = useState(false);
  const { data } = useSWR("/api/public/place/" + id);
  const place = data?.body as Place;

  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      if (session.data.user?.email === place.userMail) {
        setAllowEdit(true);
      }
    }
  }, [session.status]);

  if (data.body === null) {
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
      {place.imageURL && <PlaceImage name={place.name} src={place.imageURL} />}

      <div className={styles.title}>
        <h1>{place.name}</h1>
      </div>

      <section className={styles.content}>
        <p>{place.description}</p>
        <p>Endereço: {place.address}</p>

        {place.phone && (
          <p>
            Telefone: <a href={`tel:${place.phone}`}>{place.phone}</a>
          </p>
        )}
        {place.email && (
          <p>
            Email:{" "}
            <a href={`mailto:${place.email}`} rel="noopener noreferrer" target="_blank">
              {place.email}
            </a>
          </p>
        )}
        {place.website && (
          <p>
            Site:{" "}
            <a
              href={place.website}
              rel="noopener noreferrer"
              target="_blank"
              title={`${place.name}'s website`}
            >
              {place.website}
            </a>
          </p>
        )}
        <p>
          Algum problema ou sugestão? Entre em contato com o{" "}
          <a href={`mailto:${place.userMail}`} rel="noopener noreferrer" target="_blank">
            responsável
          </a>{" "}
          por essa página.
        </p>
      </section>

      <section className={styles.buttons}>
        {allowEdit && (
          <>
            <EditButton id={place.id} />
            <DeleteButton id={place.id} />
          </>
        )}
        <ShareButton />
      </section>
    </article>
  );
};

export default PlaceInformation;
