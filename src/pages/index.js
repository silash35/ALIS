import Header from "../components/Header";
import Locais from "../components/locais";
import Title from "../components/title";
import DefaultHead from "../components/defaultHead";

export default function Home(props) {
  return (
    <div className="container">
      <DefaultHead>
        <title>ALIS</title>
      </DefaultHead>

      <Header />

      <main>
        <Title cursive>
          <h1>
            Bem&nbsp;vindo ao&nbsp;<span>alis</span>
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <Locais locais={props.locais} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://alis.vercel.app/api/local");
  const data = await res.json();

  return {
    props: {
      locais: data.body,
    },
  };
}
