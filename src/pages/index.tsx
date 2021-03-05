import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

import Header from "@/components/Header";
import Places from "@/components/PlacesContainer";
import Search from "@/components/Search";
import ThemeButton from "@/components/ThemeSwitch";
import Title from "@/components/Title";
import { IPlace } from "@/types/IPlace";

interface Props {
  places: IPlace[];
}

const Home = (props: Props) => {
  const [places, setPlaces] = useState(props.places);

  return (
    <>
      <Head>
        <title>ALIS</title>
      </Head>

      <Header home />

      <main>
        <Title cursive>
          <h1>
            Bem&nbsp;vindo ao&nbsp;<span>alis</span>
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <Search setPlaces={setPlaces} />
        <Places places={places} />
      </main>

      <ThemeButton />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  let url = process.env.VERCEL_URL;
  if (url == undefined) {
    url = "http://localhost:3000";
  } else {
    url = "https://" + url;
  }

  const res = await fetch(url + "/api/places");
  const data = await res.json();

  return {
    props: {
      places: data.body,
    },
  };
};
