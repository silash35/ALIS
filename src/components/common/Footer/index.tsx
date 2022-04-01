import Link from "next/link";

import styles from "./footer.module.scss";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          <Link href="/help/about">
            <a>Sobre o ALIS</a>
          </Link>{" "}
          -{" "}
          <Link href="/help/faq">
            <a>Perguntas Frequentes</a>
          </Link>
        </p>

        <p>
          <Link href="/help/terms">
            <a>Termos de Uso</a>
          </Link>{" "}
          -{" "}
          <Link href="/help/privacy">
            <a>Política de Privacidade</a>
          </Link>
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
