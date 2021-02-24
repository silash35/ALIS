import styles from "../styles/horizontalCard.module.scss";
import DefaultHead from "../components/defaultHead";
import Header from "../components/header";
import Title from "../components/title";
import Love from "../components/loveIcon";
import ThemeButton from "../components/themeButton";

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

        <article className={styles.card} id={styles.horizontalCard}>
          <p>
            O ALIS é uma plataforma voltada para a comunidade surda a fim de minimizar as
            dificuldades desse público na procura de locais inclusivos. Aqui você pode contribuir
            registrando um lugar que você foi e tinha uma tecnologia pra facilitar a comunicação com
            surdos ou interprete.
          </p>

          <Love />
        </article>
      </main>
      <ThemeButton setTheme={props.setTheme} />
    </>
  );
}
