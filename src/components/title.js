import styles from "../styles/title.module.scss";

export default function Title(props) {
  let className;
  if (props.cursive) {
    className = styles.cursiveTitle;
  } else {
    className = styles.title;
  }
  return <article className={className}>{props.children}</article>;
}
