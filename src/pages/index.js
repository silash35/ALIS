import Link from "next/link";
import Locais from "../components/locais";
import DefaultHead from "../components/defaultHead";

export default function Home(props) {
  return (
    <div className="container">
      <DefaultHead>
        <title>ALIS</title>
      </DefaultHead>

      <Link as="/novo" href="/novo">
        <a className="linkCanto card">Adicionar Local</a>
      </Link>
      <header>
        <h1 className="title">
          Bem&nbsp;vindo ao&nbsp;<span>alis</span>
        </h1>
        <p>O Agregador de Locais Inclusivos para Surdos</p>
      </header>

      <main>
        <Locais locais={props.locais} />
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
