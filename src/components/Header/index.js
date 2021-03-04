import Link from "next/link";
import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./header.module.scss";

const isActive = (bool) => {
  if (bool) {
    return styles.active;
  }
};

export default function Header(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <nav>
        <Link as="/" href="/">
          <a className={styles.logo}>a</a>
        </Link>
        <div>
          <Link as="/" href="/">
            <a id={isActive(props.home)}>Inicio</a>
          </Link>
          <Link as="/sobre" href="/sobre">
            <a id={isActive(props.about)}>Sobre</a>
          </Link>
          <Link as="/novo" href="/novo">
            <a id={isActive(props.new)}>Adicionar Local</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
