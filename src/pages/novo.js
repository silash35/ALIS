import DefaultHead from "../components/defaultHead";
import FormCadastrar from "../components/formCadastrar";
import Title from "../components/title";

export default function novo(props) {
  return (
    <div className="container">
      <DefaultHead>
        <title>Adicionar Local</title>
      </DefaultHead>

      <main>
        <Title>
          <h1>
            Adicionar novo <span>Local</span>
          </h1>
          <p>Insira os dados abaixo para efetuar o cadastro de um novo local</p>
        </Title>

        <FormCadastrar />
      </main>
    </div>
  );
}
