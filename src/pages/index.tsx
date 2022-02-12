import { Place } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";
import Places from "@/components/index/PlaceCardsContainer";
import Search from "@/components/index/Search";
import url from "@/utils/url";

interface Props {
  places: Place[];
}

const Home = (props: Props) => {
  const [places, setPlaces] = useState(props.places);

  const ChangePlaces = (places: Place[]) => {
    setPlaces(places);
  };

  return (
    <>
      <Head>
        <title>ALIS</title>
      </Head>

      <Header />

      <main>
        <Title cursive>
          <h1>
            Bem&nbsp;vindo ao&nbsp;<span>alis</span>
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <Search setPlaces={ChangePlaces} />
        <Places places={places} />
      </main>

      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(url + "/api/places");
  const data = await res.json();

  return {
    props: {
      places: data.body,
    },
  };
};
