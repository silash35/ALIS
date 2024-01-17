import { useState } from "react";

import styles from "./image.module.scss";

interface Props {
  src: string;
  name: string;
}

const PlaceImage = ({ src, name }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenImage = () => {
    setIsOpen(!isOpen);
  };

  // If the image do not load, the ALIS logo will be displayed.
  const image = (
    <img
      onError={(e) => {
        e.currentTarget.src = "/images/empty.png";
        e.currentTarget.alt = "Logo do ALIS (a letra a) com fundo preto";
      }}
      alt={`Foto do local ${name}`}
      onClick={handleOpenImage}
      src={src}
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
};

export default PlaceImage;
