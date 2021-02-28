import Link from "next/link";

import styles from "./header.module.scss";

const isActive = (bool) => {
  if (bool) {
    return styles.active;
  }
};

export default function Header(props) {
  return (
    <header className={`${styles.header} ${styles[props.theme]}`}>
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
