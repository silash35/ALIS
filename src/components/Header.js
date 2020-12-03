import Link from "next/link";
import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link as="/novo" href="/novo">
          <a className="card">Adicionar Local</a>
        </Link>
        <Link as="/sobre" href="/sobre">
          <a className="card">Sobre</a>
        </Link>
      </nav>
    </header>
  );
}
