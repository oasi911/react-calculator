import css from "./History.module.css";

export function History({ toggleHistory }) {
  return (
    <>
      {toggleHistory ? (
        <div className={css.historyOpen}></div>
      ) : (
        <div className={css.historyClose}></div>
      )}
      {/* <div className={css.history}></div> */}
    </>
  );
}
