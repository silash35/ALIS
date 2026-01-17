import Link from "next/link";
import styles from "./account.module.scss";

const Account = () => {
  return (
    <>
      <button>Fazer Login</button>
      <button className={styles.signUp}>Criar Conta</button>
    </>
  );
};

export default Account;
