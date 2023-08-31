import css from "./Buttons.module.css";

export function Buttons({ inputHandler, operationHandler, equalHandler }) {
  return (
    <div className={css.buttons}>
      <button className={css.calcBtn} onClick={operationHandler}>
        CE
      </button>
      <button className={css.calcBtn} onClick={operationHandler}>
        C
      </button>
      <button className={css.calcBtn} onClick={operationHandler}>
        ⌫
      </button>
      <button className={css.mathBtn} onClick={operationHandler}>
        /
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        7
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        8
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        9
      </button>
      <button className={css.mathBtn} onClick={operationHandler}>
        x
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        4
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        5
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        6
      </button>
      <button className={css.mathBtn} onClick={operationHandler}>
        -
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        1
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        2
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        3
      </button>
      <button className={css.mathBtn} onClick={operationHandler}>
        +
      </button>
      <button className={css.calcBtn} onClick={operationHandler}>
        ±
      </button>
      <button className={css.numberBtn} onClick={inputHandler}>
        0
      </button>
      <button className={css.calcBtn} onClick={operationHandler}>
        .
      </button>
      <button className={css.mathBtn} onClick={equalHandler}>
        =
      </button>
    </div>
  );
}
