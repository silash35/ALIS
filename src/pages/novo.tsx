import Head from "next/head";

import Footer from "@/components/Footer";
import FormRegistration from "@/components/FormRegistration";
import Header from "@/components/Header";
import Title from "@/components/Title";

const novo = () => {
  return (
    <>
      <Head>
        <title>Adicionar Local</title>
      </Head>
      <Header />
      <main>
        <Title>
          <h1>
            Adicionar novo <span>Local</span>
          </h1>
          <p>Insira os dados abaixo para efetuar o cadastro de um novo local</p>
        </Title>

        <FormRegistration />
      </main>
      <Footer />
    </>
  );
};

export default novo;
