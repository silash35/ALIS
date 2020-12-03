import DefaultHead from "../components/defaultHead";
import Title from "../components/title";

export default function sobre(props) {
  return (
    <div className="container">
      <DefaultHead>
        <title>Sobre</title>
      </DefaultHead>

      <main>
        <Title>
          <h1>
            O que é o <span>ALIS</span>?
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <p className="card" style={{ textAlign: "justify" }}>
          O ALIS é uma plataforma voltada para a comunidade surda a fim de minimizar as dificuldades
          desse público na procura de locais inclusivos. Aqui você pode contribuir registrando um
          lugar que você foi e tinha uma tecnologia pra facilitar a comunicação com surdos ou
          interprete.
        </p>
      </main>
    </div>
  );
}
