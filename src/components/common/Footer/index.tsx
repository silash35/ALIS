import Link from "next/link";

import styles from "./footer.module.scss";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <p>
        <Link href="/help/about">Sobre o ALIS</Link> -{" "}
        <Link href="/help/faq">Perguntas Frequentes</Link>
      </p>

      <p>
        <Link href="/help/terms">Termos de Uso</Link> -{" "}
        <Link href="/help/privacy">Política de Privacidade</Link>
      </p>

      <p>
        Nenhum direito reservado. Escrito, mantido e agora aposentado por{" "}
        <a href="https://silas.eng.br/" rel="noopener noreferrer" title="Website of Silas Henrique">
          Silas Henrique
        </a>
      </p>
    </div>
    <ThemeSwitch />
  </footer>
);

export default Footer;
