import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>ALIS</title>
      </Head>

      <header>
        <h1>
          Welcome to <span>ALIS</span>
        </h1>
      </header>

      <main>
        {props.locais.map((local) => {
          return (
            <article className="card">
              <h2>{local.nome}</h2>
              <p>se vira aí</p>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const db = await connectToDatabase();

  const locais = await db.db.collection("listaDeLocais").find({}).toArray();

  return {
    props: {
      locais: JSON.parse(JSON.stringify(locais)),
    },
  };
}
