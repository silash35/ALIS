import IconButton from "@mui/material/IconButton";
import Explore from "@mui/icons-material/Explore";
import Link from "next/link";
import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";
import { IPlace } from "@/types/IPlace";

import styles from "./card.module.scss";

interface Props {
  place: IPlace;
}

export default function PlaceCard({ place }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link as={`/locais/${place._id}`} href={`/locais/${place._id}`}>
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
