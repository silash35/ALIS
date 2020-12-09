import Header from "../components/header";
import Title from "../components/title";
import DefaultHead from "../components/defaultHead";
import FormCadastrar from "../components/formCadastrar";

export default function novo() {
  return (
    <div className="container">
      <DefaultHead>
        <title>Adicionar Local</title>
      </DefaultHead>

      <Header new/>

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
