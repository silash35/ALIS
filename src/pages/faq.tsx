import Head from "next/head";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";
import Questions from "@/components/Questions";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>
          Perguntas <span>frequentes</span>
        </title>
      </Head>

      <Header />

      <main>
        <Title small>
          <h1>Perguntas frequentes</h1>
          <p>+ Politicas de privacidade e termos de uso</p>
        </Title>

        <Questions />
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
