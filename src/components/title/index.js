import styles from "./title.module.scss";

export default function Title(props) {
  let className;
  if (props.cursive) {
    className = styles.cursiveTitle;
  } else {
    className = styles.title;
  }
  return <div className={className}>{props.children}</div>;
}
