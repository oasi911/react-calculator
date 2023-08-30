import { Display } from "../Display/Display";
import { Buttons } from "../Buttons/Buttons";
import { useState } from "react";

export function Calculator() {
  const [input, setInput] = useState(0);
  return (
    <>
      <Display input={input}></Display>
      <Buttons></Buttons>
    </>
  );
}
