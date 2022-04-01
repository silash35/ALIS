import styles from "./topics.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Topics({ children }: Props) {
  return <article className={styles.topics}>{children}</article>;
}
