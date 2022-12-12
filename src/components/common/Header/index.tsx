import Link from "next/link";

import Account from "./Account";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.links}>
          <Link href="/" className={styles.logo}>
            a
          </Link>
        </div>

        <div className={styles.links}>
          <Account />
        </div>
      </nav>
    </header>
  );
}
