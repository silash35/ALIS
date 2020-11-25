import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>ALIS</title>
      </Head>

      <main>
        <h1 className="title">Welcome to ALIS</h1>

        <article>
          <h2>{props.locais[0].nome}</h2>
          <p>
            se vira aí
          </p>
        </article>
      </main>

    </div>
  );
}

export async function getServerSideProps(context) {
  const db = await connectToDatabase();

  const locais = await db.db.collection("listaDeLocais").find({}).toArray();
  console.log(locais);

  return {
    props: {
      locais: JSON.parse(JSON.stringify(locais))
    }
  };
}
