import css from "./spinner.module.css";

export default function Spinners() {
  return (
    /* Spinner com animação */
    <div className={css.loading}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
