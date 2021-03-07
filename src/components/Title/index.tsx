import styles from "./title.module.scss";

interface Props {
  cursive?: boolean;
  children: React.ReactNode;
}

const Title = (props: Props) => {
  let className: string;
  if (props.cursive) {
    className = styles.cursiveTitle;
  } else {
    className = styles.title;
  }
  return <div className={className}>{props.children}</div>;
};

export default Title;
