import Head from "next/head";
import React from "react";

import Header from "../components/header";
import Places from "../components/places";
import Search from "../components/search";
import ThemeButton from "../components/themeButton";
import Title from "../components/title";

export default function Home(props) {
  const [places, setPlaces] = React.useState(props.places);

  return (
    <React.Fragment>
      <Head>
        <title>ALIS</title>
      </Head>

      <Header home theme={props.theme} />

      <main>
        <Title cursive>
          <h1>
            Bem&nbsp;vindo ao&nbsp;<span>alis</span>
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <Search setPlaces={setPlaces} theme={props.theme} />
        <Places places={places} />
      </main>

      <ThemeButton setTheme={props.setTheme} />
    </React.Fragment>
  );
}

export async function getServerSideProps() {
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
}
