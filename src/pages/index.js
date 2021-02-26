import React from "react";

import DefaultHead from "../components/defaultHead";
import Header from "../components/header";
import Pesquisa from "../components/pesquisa";
import Places from "../components/places";
import ThemeButton from "../components/themeButton";
import Title from "../components/title";

export default function Home(props) {
  const [places, setPlaces] = React.useState(props.places);

  return (
    <React.Fragment>
      <DefaultHead>
        <title>ALIS</title>
      </DefaultHead>

      <Header home />

      <main>
        <Title cursive>
          <h1>
            Bem&nbsp;vindo ao&nbsp;<span>alis</span>
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <Pesquisa setLocais={setPlaces} />
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

  const res = await fetch(url + "/api/local");
  const data = await res.json();

  return {
    props: {
      places: data.body,
    },
  };
}
