import css from "./Buttons.module.css";

export function Buttons() {
  return (
    <div className={css.buttons}>
      <button className={css.calcBtn}>CE</button>
      <button className={css.calcBtn}>C</button>
      <button className={css.calcBtn}>⌫</button>
      <button className={css.mathBtn}>÷</button>
      <button className={css.numberBtn}>7</button>
      <button className={css.numberBtn}>8</button>
      <button className={css.numberBtn}>9</button>
      <button className={css.mathBtn}>x</button>
      <button className={css.numberBtn}>4</button>
      <button className={css.numberBtn}>5</button>
      <button className={css.numberBtn}>6</button>
      <button className={css.mathBtn}>-</button>
      <button className={css.numberBtn}>1</button>
      <button className={css.numberBtn}>2</button>
      <button className={css.numberBtn}>3</button>
      <button className={css.mathBtn}>+</button>
      <button className={css.calcBtn}>±</button>
      <button className={css.numberBtn}>0</button>
      <button className={css.calcBtn}>,</button>
      <button className={css.mathBtn}>=</button>
    </div>
  );
}
