import Head from "next/head";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a className="linkCanto card" href="/novo">
        Adicionar Local
      </a>
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
  const res = await fetch("https://alis.vercel.app/api/local");
  const data = await res.json();

  return {
    props: {
      locais: data.body,
    },
  };
}
