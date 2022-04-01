import styles from "./questions.module.scss";

export default function Questions() {
  return (
    <article className={styles.container}>
      <section>
        <h2>Quais dados são coletados?</h2>
        <p>
          Não coletamos nenhum dado dos usuários. Nem ao menos guardamos as informações dos perfis
          em nosso banco de dados. O seu nome, endereço de email e foto do perfil são requisitados
          dos servidores do Google sempre que necessário.
        </p>
        <p>
          Somente no momento de criação de um novo local que o endereço de Email do criador é
          guardado com as outras informações do local. O endereço de Email é necessário para ser
          possível identificar quem é o responsável pela página do local, portanto, quem tem direito
          de altera-la.
        </p>
        <p>
          O seu endereço de Email estará visível publicamente para todos que acessarem os seus
          locais para outras pessoas poderem comunicar e sugerir mudanças diretamente com você.
        </p>
      </section>
      <section>
        <h2>Como deletar minha conta?</h2>
        <p>
          Como dito anteriormente, não armazenamos nenhuma informação de conta. Então caso você
          deseje excluir sua conta o máximo que você precisa fazer é deletar seus locais e assim nem
          mesmo o seu endereço de email estará guardado nos nossos servidores.
        </p>
        <p>
          Como um extra, você também pode remover o ALIS dos sites conectadas a sua conta Google
          acessando o{" "}
          <a href="https://myaccount.google.com/permissions" rel="noopener noreferrer">
            Google Accounts
          </a>
          .
        </p>
      </section>
      <section>
        <h2>O ALIS é de Código Aberto?</h2>
        <p>
          Sim! Todo o código do ALIS está disponível no nosso{" "}
          <a href="https://github.com/silash35/ALIS" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
        <p>
          Ele está distribuído sobre a licença{" "}
          <a href="https://unlicense.org/" rel="noopener noreferrer">
            The Unlicense
          </a>
          . Isso significa que qualquer pessoa pode copiar, modificar, publicar, usar, vender ou
          distribuir o código do ALIS, para qualquer finalidade que quiser.
        </p>
      </section>
      <section>
        <h2>Onde o ALIS está hospedado?</h2>
        <p>
          O ALIS foi construído usando o{" "}
          <a href="https://nextjs.org/" rel="noopener noreferrer">
            Next.js
          </a>{" "}
          e está hospedado na{" "}
          <a href="https://vercel.com/" rel="noopener noreferrer">
            Vercel
          </a>
          .
        </p>
        <p>
          O{" "}
          <a href="https://www.mongodb.com/" rel="noopener noreferrer">
            MongoDB
          </a>{" "}
          é o Banco de Dados utilizado e ele está hospedado no{" "}
          <a href="https://www.mongodb.com/atlas" rel="noopener noreferrer">
            MongoDB Atlas
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Alguma garantia?</h2>
        <p>NÃO!</p>
        <p>O ALIS é disponibilizado gratuitamente e sem nenhuma garantia de nenhum tipo.</p>
      </section>
    </article>
  );
}
