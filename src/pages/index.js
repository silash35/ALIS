import DefaultHead from "../components/defaultHead";
import Header from "../components/header";
import Title from "../components/title";
import Pesquisa from "../components/pesquisa";
import Locais from "../components/locais";

export default function Home(props) {
  const [locais, setLocais] = React.useState(props.locais);
  return (
    <React.Fragment>
      <DefaultHead>
        <title>ALIS</title>
      </DefaultHead>

      <Header home />

      <main>
        <Title cursive>
          <h1>
            Bem&nbsp;vindo ao&nbsp;<span>alis</span>
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <Pesquisa setLocais={setLocais} />
        <Locais locais={locais} />
      </main>
    </React.Fragment>
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
