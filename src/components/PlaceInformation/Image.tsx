import Head from "next/head";
import { useState } from "react";

import styles from "./image.module.scss";

interface Props {
  src?: string;
  name: string;
}

export default function PlaceImage({ src, name }: Props) {
  const [imageUrl, setImageUrl] = useState("https://alis.vercel.app/card.png");
  const [imageAlt, setImageAlt] = useState(
    "Logo da ALIS: A letra 'a' azul e cursiva, que a um olhar atento lembra uma orelha"
  );

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenImage = () => {
    setIsOpen(!isOpen);
  };

  // If the image does not exist, the ALIS logo will be displayed.
  const image = (
    <img
      src={src ? src : "/images/empty.png"}
      alt={src ? `Foto do local ${name}` : "Logo do ALIS (a letra a) com fundo preto"}
      onClick={handleOpenImage}
      onError={(e) => {
        e.currentTarget.src = "/images/empty.png";
        e.currentTarget.alt = "Logo do ALIS (a letra a) com fundo preto";
      }}
      onLoad={() => {
        setImageUrl(src as string);
        setImageAlt(`Foto do local ${name}`);
      }}
    />
  );

  return (
    <>
      <Head>
        <meta property="og:title" content={name} key="ogTitle" />
        <meta property="og:image" content={imageUrl} key="ogImage" />
        <meta property="og:image:alt" content={imageAlt} key="ogImageAlt" />

        {/* Twitter */}
        <meta name="twitter:title" content={name} key="twitterTitle" />
        <meta name="twitter:image" content={imageUrl} key="twitterImage" />
      </Head>

      <div className={styles.image}>{image}</div>
      {isOpen && (
        <div className={styles.openImage} onClick={handleOpenImage}>
          {image}
        </div>
      )}
    </>
  );
}
