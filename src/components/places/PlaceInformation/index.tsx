import PlaceImage from "./Image";
import styles from "./placeInformation.module.scss";
import ShareButton from "./ShareButton";
import { TPlace } from "@/components/index/TPlaces";

interface Props {
  place: TPlace;
}

const PlaceInformation = ({ place }: Props) => {
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
        <ShareButton />
      </section>
    </article>
  );
};

export default PlaceInformation;
