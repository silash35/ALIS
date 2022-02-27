import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";

import styles from "./header.module.scss";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <nav>
        <Link as="/" href="/">
          <a className={styles.logo}>a</a>
        </Link>
        <div>
          <Link as="/" href="/">
            {router.asPath == "/" ? <a id={styles.active}>Inicio</a> : <a>Inicio</a>}
          </Link>
          <Link as="/sobre" href="/sobre">
            {router.asPath == "/sobre" ? <a id={styles.active}>Sobre</a> : <a>Sobre</a>}
          </Link>
          <Link as="/novo" href="/novo">
            {router.asPath == "/novo" ? (
              <a id={styles.active}>Adicionar Local</a>
            ) : (
              <a>Adicionar Local</a>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
