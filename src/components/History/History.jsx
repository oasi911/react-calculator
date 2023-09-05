import css from "./History.module.css";

export function History({ toggleHistory }) {
  const historyClassName = toggleHistory ? css.historyOpen : css.historyClose;
  const storedHistory = localStorage.getItem("calculatorHistory");
  const parsedHistory = JSON.parse(storedHistory);
  //   console.log(storedHistory);

  return (
    <>
      <div className={historyClassName}>
        {/* <h2>history</h2> */}
        <ul className={css.list}>
          {parsedHistory.map((item, index) => (
            <li key={index} className={css.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
