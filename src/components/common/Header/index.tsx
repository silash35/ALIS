import Link from "next/link";

import Account from "./Account";
import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <nav>
      <div className={styles.links}>
        <Link className={styles.logo} href="/">
          a
        </Link>
      </div>

      <div className={styles.links}>
        <Account />
      </div>
    </nav>
  </header>
);

export default Header;
