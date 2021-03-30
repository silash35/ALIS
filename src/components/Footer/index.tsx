import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeSwitch from "../ThemeSwitch";
import styles from "./footer.module.scss";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
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
      <ThemeSwitch />
    </footer>
  );
};

export default Footer;
