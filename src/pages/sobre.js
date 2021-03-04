import Head from "next/head";

import AboutCard from "../components/aboutCard";
import Header from "../components/header";
import ThemeButton from "../components/themeButton";
import Title from "../components/title";

export default function sobre(props) {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>

      <Header about />

      <main>
        <Title>
          <h1>
            O que é o <span>ALIS</span>
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <AboutCard />
      </main>
      <ThemeButton />
    </>
  );
}
