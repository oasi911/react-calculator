import { Display } from "../Display/Display";
import { Buttons } from "../Buttons/Buttons";
import { useState } from "react";

export function Calculator() {
  const [input, setInput] = useState("");
  // const [answer, setAnswer] = useState("");

  function inputHandler(e) {
    let digit = e.target.innerText;
    setInput((prevDigit) => prevDigit + digit);
  }

  return (
    <>
      <Display input={input}></Display>
      <Buttons inputHandler={inputHandler}></Buttons>
    </>
  );
}
