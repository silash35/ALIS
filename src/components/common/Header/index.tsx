import Link from "next/link";
import { useRouter } from "next/router";

import Account from "./account";
import styles from "./header.module.scss";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav>
        <Link as="/" href="/">
          <a className={styles.logo}>a</a>
        </Link>
        <div className={styles.links}>
          <Link as="/" href="/">
            {router.asPath == "/" ? <a id={styles.active}>Inicio</a> : <a>Inicio</a>}
          </Link>
          <Link as="/sobre" href="/sobre">
            {router.asPath == "/sobre" ? <a id={styles.active}>Sobre</a> : <a>Sobre</a>}
          </Link>
          <Account />
        </div>
      </nav>
    </header>
  );
}
