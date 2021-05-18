import { IPlace } from "@/types/IPlace";

import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import PlaceImage from "./Image";
import styles from "./placeInformation.module.scss";
import ShareButton from "./ShareButton";

interface Props {
  place: IPlace;
}

export default function PlaceInformation({ place }: Props) {
  return (
    <article className={styles.container}>
      <PlaceImage src={place.imageURL} name={place.name} />

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
        <EditButton id={place._id} />
        <DeleteButton id={place._id} />
        <ShareButton />
      </section>
    </article>
  );
}
