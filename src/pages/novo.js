import Head from "next/head";

import FormRegistration from "../components/FormRegistration";
import Header from "../components/Header";
import ThemeButton from "../components/ThemeSwitch";
import Title from "../components/Title";

export default function novo(props) {
  return (
    <>
      <Head>
        <title>Adicionar Local</title>
      </Head>

      <Header new />

      <main>
        <Title>
          <h1>
            Adicionar novo <span>Local</span>
          </h1>
          <p>Insira os dados abaixo para efetuar o cadastro de um novo local</p>
        </Title>

        <FormRegistration />
      </main>
      <ThemeButton />
    </>
  );
}
