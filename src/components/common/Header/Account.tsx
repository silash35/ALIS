import Link from "next/link";

import styles from "./account.module.scss";

const Account = () => {
  return (
    <>
      <Link href="/deprecation">Fazer Login</Link>
      <Link className={styles.signin} href="/deprecation">
        Criar Conta
      </Link>
    </>
  );
};

export default Account;
