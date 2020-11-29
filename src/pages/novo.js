import Head from "next/head";
import FormCadastrar from "../components/formCadastrar";

export default function novo(props) {
  return (
    <div className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <title>Adicionar Local</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="novo">
        <h1>
          Adicionar novo <span>Local</span>
        </h1>
        <p>Insira os dados abaixo para efetuar o cadastro de um novo local</p>
      </header>

      <main>
        <FormCadastrar />
      </main>
    </div>
  );
}
