import AboutCard from "../components/aboutCard";
import DefaultHead from "../components/defaultHead";
import Header from "../components/header";
import ThemeButton from "../components/themeButton";
import Title from "../components/title";

export default function sobre(props) {
  return (
    <>
      <DefaultHead>
        <title>Sobre</title>
      </DefaultHead>

      <Header setTheme={props.setTheme} about />

      <main>
        <Title>
          <h1>
            O que é o <span>ALIS</span>
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <AboutCard />
      </main>
      <ThemeButton setTheme={props.setTheme} />
    </>
  );
}
