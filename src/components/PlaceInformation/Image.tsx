import { useState } from "react";

import styles from "./image.module.scss";

interface Props {
  src?: string;
  name: string;
}

export default function PlaceImage({ src, name }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenImage = () => {
    setIsOpen(!isOpen);
  };

  // If the image does not exist, the ALIS logo will be displayed.
  const image = (
    <img
      src={src ? src : "/images/empty.png"}
      alt={src ? `Foto do local ${name}` : "Logo do alis (a letra a) com fundo preto"}
      onClick={handleOpenImage}
      onError={(e) => {
        e.currentTarget.src = "/images/empty.png";
        e.currentTarget.alt = "Logo do alis (a letra a) com fundo preto";
      }}
    />
  );

  return (
    <>
      <div className={styles.image}>{image}</div>
      {isOpen && (
        <div className={styles.openImage} onClick={handleOpenImage}>
          {image}
        </div>
      )}
    </>
  );
}
