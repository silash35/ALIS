import { useState } from "react";

import styles from "./PlaceImage.module.scss";

interface Props {
  src: string;
  alt: string;
}

export default function PlaceImage({ src, alt }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenImage = () => {
    setIsOpen(!isOpen);
  };

  const image = <img src={src} alt={alt} onClick={handleOpenImage} />;

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
