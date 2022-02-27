import { useState } from "react";

import styles from "./image.module.scss";

interface Props {
  src: string;
  name: string;
}

export default function PlaceImage({ src, name }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenImage = () => {
    setIsOpen(!isOpen);
  };

  // If the image do not load, the ALIS logo will be displayed.
  const image = (
    <img
      src={src}
      alt={`Foto do local ${name}`}
      onClick={handleOpenImage}
      onError={(e) => {
        e.currentTarget.src = "/images/empty.png";
        e.currentTarget.alt = "Logo do ALIS (a letra a) com fundo preto";
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
