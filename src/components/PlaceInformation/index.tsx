import DeletePlaceButton from "@/components/DeletePlaceButton";
import PlaceImage from "@/components/PlaceImage";
import { IPlace } from "@/types/IPlace";

import styles from "./placeInformation.module.scss";

interface Props {
  place: IPlace;
}

export default function PlaceInformation({ place }: Props) {
  return (
    <article className={styles.container}>
      <PlaceImage
        src={place.imageURL ? place.imageURL : "/images/empty.png"}
        alt={
          place.imageURL
            ? `Foto do local ${place.name}`
            : "Logo do alis (a letra a) com fundo preto"
        }
      />

      <div className={styles.title}>
        <h1>{place.name}</h1>
      </div>

      <div className={styles.content}>
        <section>
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
        <DeletePlaceButton id={place._id} />
      </div>
    </article>
  );
}
