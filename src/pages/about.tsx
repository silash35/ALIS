import Head from "next/head";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";
import AboutCard from "@/components/sobre/AboutCard";

const Sobre = () => {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>

      <Header />

      <main>
        <Title>
          <h1>
            O que é o <span>ALIS</span>
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <AboutCard />
      </main>
      <Footer />
    </>
  );
};

export default Sobre;
