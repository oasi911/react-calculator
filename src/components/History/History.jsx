import css from "./History.module.css";
import { useState } from "react";

export function History({ toggleHistory }) {
  const [history, setHistory] = useState(() => {
    const storedHistory = localStorage.getItem("calculatorHistory");
    return JSON.parse(storedHistory) || [];
  });

  const historyClassName = toggleHistory ? css.historyOpen : css.historyClose;

  function clearHistory() {
    localStorage.clear();
    setHistory([]);
  }

  return (
    <>
      <div className={historyClassName}>
        {/* <h2>history</h2> */}
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
