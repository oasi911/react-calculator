import css from "./Buttons.module.css";

export function Buttons({ inputHandler }) {
  return (
    <div className={css.buttons}>
      <button className={css.calcBtn}>CE</button>
      <button className={css.calcBtn}>C</button>
      <button className={css.calcBtn}>⌫</button>
      <button className={css.mathBtn}>÷</button>
      <button className={css.numberBtn} onClick={inputHandler}>
        7
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        8
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        9
      </button>
      <button className={css.mathBtn}>x</button>
      <button className={css.numberBtn} onClick={inputHandler}>
        4
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        5
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        6
      </button>
      <button className={css.mathBtn}>-</button>
      <button className={css.numberBtn} onClick={inputHandler}>
        1
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        2
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        3
      </button>
      <button className={css.mathBtn}>+</button>
      <button className={css.calcBtn}>±</button>
      <button className={css.numberBtn}>0</button>
      <button className={css.calcBtn}>,</button>
      <button className={css.mathBtn}>=</button>
    </div>
  );
}
