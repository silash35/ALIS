import Link from "next/link";

import Account from "./Account";
import styles from "./header.module.scss";

const Header = () => (
  <>
    <div className={styles.warning}>
      O ALIS foi encerrado como serviço ativo. Esta versão está disponível apenas para fins
      demonstrativos.
    </div>
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
  </>
);

export default Header;
