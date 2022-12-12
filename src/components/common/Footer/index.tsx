import Link from "next/link";

import styles from "./footer.module.scss";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  return (
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
          Nenhum direito reservado. Mantido por{" "}
          <a
            href="https://silash35.github.io/"
            title="Website of Silas Henrique"
            rel="noopener noreferrer"
          >
            Silas Henrique
          </a>
        </p>
      </div>
      <ThemeSwitch />
    </footer>
  );
};

export default Footer;
