import styles from "./title.module.scss";

interface Props {
  cursive?: boolean;
  small?: boolean;
  children: React.ReactNode;
}

const Title = (props: Props) => {
  const className = `${styles.title} ${props.cursive ? styles.cursive : undefined} ${
    props.small ? styles.small : undefined
  }`;

  return <div className={className}>{props.children}</div>;
};

export default Title;
