import css from "./Button.module.scss";

export default function Button(props) {
  return (
    <button className={css.btn} id="theme__el" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
