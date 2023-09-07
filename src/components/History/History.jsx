import css from "./History.module.css";

export function History({ toggleHistory, history, clearHistory }) {
  const historyClassName = toggleHistory ? css.historyOpen : css.historyClose;

  return (
    <>
      <div className={historyClassName}>
        {history.length === 0 ? (
          <p className={css.noHistory}>No history yet</p>
        ) : (
          <ul className={css.list}>
            {history.map((item, index) => (
              <li key={index} className={css.item}>
                {item}
              </li>
            ))}
          </ul>
        )}
        <button className={css.clearBtn} onClick={clearHistory}>
          🗑
        </button>
      </div>
    </>
  );
}
