import Link from "next/link";
import { useRouter } from "next/router";

import Account from "./account";
import styles from "./header.module.scss";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.links}>
          <Link as="/" href="/">
            <a className={styles.logo}>a</a>
          </Link>
        </div>

        <div className={styles.links}>
          <Link as="/" href="/">
            <a id={router.asPath === "/" ? styles.active : undefined}>Inicio</a>
          </Link>
          <Link as="/sobre" href="/sobre">
            <a id={router.asPath === "/sobre" ? styles.active : undefined}>Sobre</a>
          </Link>
          <Account />
        </div>
      </nav>
    </header>
  );
}
