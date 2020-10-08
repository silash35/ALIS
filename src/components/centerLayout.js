import style from './centerLayout.module.scss';

export default function CenterLayout(props) {
  return (
    <div className={style.CenterLayout}>
      {props.children}
    </div>
  )
}