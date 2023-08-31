import { Display } from "../Display/Display";
import { Buttons } from "../Buttons/Buttons";
import { useState } from "react";

export function Calculator() {
  const [input, setInput] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState("");

  function inputHandler(e) {
    const digit = e.target.innerText;
    setInput((prevDigit) => prevDigit + digit);
  }

  function operationHandler(e) {
    const opDigit = e.target.innerText;
    setOperation(opDigit);
    setResult(input);
    setInput("");
  }

  function equalHandler() {
    if (operation && input !== "") {
      const num1 = parseFloat(result);
      const num2 = parseFloat(input);

      let total;
      switch (operation) {
        case "+":
          total = num1 + num2;
          break;
        case "-":
          total = num1 - num2;
          break;
        case "x":
          total = num1 * num2;
          break;
        case "/":
          total = num1 / num2;
          break;
        case "CE":
          setInput("");
          break;
        case "C":
          setInput("");
          setResult("");
          break;
        case "⌫":
          setInput(input.slice(0, -1));
          break;
        case "±":
          parseFloat(input) < 0
            ? setInput(Math.abs(input))
            : setInput(-Math.abs(input));
          break;
        case ".":
          setInput(input + ".");
          break;
        default:
          break;
      }

      setInput(total);
    }
  }

  return (
    <>
      <Display input={input}></Display>
      <Buttons
        inputHandler={inputHandler}
        operationHandler={operationHandler}
        equalHandler={equalHandler}
      ></Buttons>
    </>
  );
}
