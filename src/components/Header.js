import Link from "next/link";
import styles from "../styles/header.module.scss";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <nav>
        <Link as="/novo" href="/novo">
          <a className="card">Adicionar Local</a>
        </Link>
      </nav>
    </header>
  );
}
