import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <title>ALIS</title>
      </Head>

      <a className="linkCanto card" href="/novo">Adicionar Local</a>
      <header>
        <h1 className="title">
          Bem vindo ao <span>alis</span>
        </h1>
        <p>O Agregador de Locais Inclusivos para Surdos</p>
      </header>

      <main>
        {props.locais.map((local) => {
          return (
            <article className="card" key={local._id}>
              <h2>{local.nome}</h2>
              <p>Descrição: {local.descrição}</p>
              <p>Endereço: {local.endereço}</p>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const db = await connectToDatabase();

  const listaDeLocais = await db.db.collection("listaDeLocais");
  const locais = await listaDeLocais.find({}).toArray();

  return {
    props: {
      locais: JSON.parse(JSON.stringify(locais)),
    },
  };
}
