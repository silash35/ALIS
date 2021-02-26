import Head from "next/head";

import FormRegistration from "../components/formRegistration";
import Header from "../components/header";
import ThemeButton from "../components/themeButton";
import Title from "../components/title";

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
      <ThemeButton setTheme={props.setTheme} />
    </>
  );
}
