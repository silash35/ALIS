import Explore from "@mui/icons-material/Explore";
import IconButton from "@mui/material/IconButton";
import { Place } from "@prisma/client";
import Link from "next/link";

import styles from "./card.module.scss";

interface Props {
  place: Place;
}

const Card = ({ place }: Props) => (
  <Link href={`/places/${place.id}`}>
    <article
      style={{
        backgroundImage: `url(${place.imageURL}), url(/images/empty.png)`,
      }}
      className={styles.card}
    >
      <div className={styles.content}>
        <h2>{place.name}</h2>
        <IconButton aria-label="Discover the place">
          <Explore fontSize="large" />
        </IconButton>
      </div>
    </article>
  </Link>
);

export default Card;
