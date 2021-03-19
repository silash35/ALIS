import Image from "next/image";

import Title from "@/components/Title";
import { IPlace } from "@/types/IPlace";

import styles from "./placeInformation.module.scss";

interface Props {
  place: IPlace;
}

export default function PlaceInformation({ place }: Props) {
  return (
    <article>
      <Title>
        <h1 className={styles.title}>{place.name}</h1>
      </Title>

      <div className={styles.content}>
        <Image
          src="/images/empty.png"
          alt="Logo do alis (a letra a) com fundo preto"
          width="500"
          height="500"
        />

        <section className={styles.info}>
          <p>Endereço: {place.address}</p>
          <p>Descrição: {place.description}</p>
        </section>
      </div>
    </article>
  );
}
