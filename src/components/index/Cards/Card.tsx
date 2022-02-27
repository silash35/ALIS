import Explore from "@mui/icons-material/Explore";
import IconButton from "@mui/material/IconButton";
import { Place } from "@prisma/client";
import Link from "next/link";
import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";

import styles from "./card.module.scss";

interface Props {
  place: Place;
}

export default function Card({ place }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link as={`/locais/${place.id}`} href={`/locais/${place.id}`}>
      <a>
        <article
          className={`${styles.card} ${styles[theme]}`}
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
