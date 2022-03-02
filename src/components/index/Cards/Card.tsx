import Explore from "@mui/icons-material/Explore";
import IconButton from "@mui/material/IconButton";
import { Place } from "@prisma/client";
import Link from "next/link";

import styles from "./card.module.scss";

interface Props {
  place: Place;
}

export default function Card({ place }: Props) {
  return (
    <Link as={`/locais/${place.id}`} href={`/locais/${place.id}`}>
      <a>
        <article
          className={styles.card}
          style={{
            backgroundImage: `url(${place.imageURL}), url(/images/empty.png)`,
          }}
        >
          <div className={styles.content}>
            <h2>{place.name}</h2>
            <IconButton aria-label="Discover the place">
              <Explore fontSize="large" />
            </IconButton>
          </div>
        </article>
      </a>
    </Link>
  );
}
