import Head from "next/head";

import AboutCard from "@/components/AboutCard";
import Header from "@/components/Header";
import ThemeButton from "@/components/ThemeSwitch";
import Title from "@/components/Title";

const sobre = () => {
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
};

export default sobre;
