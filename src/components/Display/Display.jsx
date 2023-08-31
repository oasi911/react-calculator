import css from "./Display.module.css";

export function Display({ input }) {
  return (
    <div className={css.display}>
      <input
        className={css.input}
        placeholder="0"
        type="text"
        maxLength={16}
        autoComplete="off"
        value={input}
        readOnly
      ></input>
    </div>
  );
}
