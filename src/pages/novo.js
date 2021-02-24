import Header from "../components/header";
import Title from "../components/title";
import DefaultHead from "../components/defaultHead";
import FormCadastrar from "../components/formCadastrar";
import ThemeButton from "../components/themeButton";

export default function novo(props) {
  return (
    <>
      <DefaultHead>
        <title>Adicionar Local</title>
      </DefaultHead>

      <Header new />

      <main>
        <Title>
          <h1>
            Adicionar novo <span>Local</span>
          </h1>
          <p>Insira os dados abaixo para efetuar o cadastro de um novo local</p>
        </Title>

        <FormCadastrar />
      </main>
      <ThemeButton setTheme={props.setTheme} />
    </>
  );
}
