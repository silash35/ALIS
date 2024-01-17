import styles from "./topics.module.scss";

interface Props {
  children: React.ReactNode;
}

const Topics = ({ children }: Props) => <article className={styles.topics}>{children}</article>;

export default Topics;
