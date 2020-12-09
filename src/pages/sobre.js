import styles from "../styles/card.module.scss";
import DefaultHead from "../components/defaultHead";
import Header from "../components/header";
import Title from "../components/title";
import Image from "next/image";

const style = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",

  justifyContent: "center",
  alignItems: "center",
  width: "auto",
  height: "auto",
};

export default function sobre(props) {
  return (
    <div className="container">
      <DefaultHead>
        <title>Sobre</title>
      </DefaultHead>

      <Header about/>

      <main>
        <Title>
          <h1>
            O que é o <span>ALIS</span>?
          </h1>
          <p>O Agregador de Locais Inclusivos para Surdos</p>
        </Title>

        <article className={styles.card} style={style}>
          <p style={{ textAlign: "justify", maxWidth: "400px" }}>
            O ALIS é uma plataforma voltada para a comunidade surda a fim de minimizar as
            dificuldades desse público na procura de locais inclusivos. Aqui você pode contribuir
            registrando um lugar que você foi e tinha uma tecnologia pra facilitar a comunicação com
            surdos ou interprete.
          </p>

          <Image src="/love.svg" alt="Ícone de Amor em libras com um coração" width={250} height={250} />
        </article>
      </main>
    </div>
  );
}
