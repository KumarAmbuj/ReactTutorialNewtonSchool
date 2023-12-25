import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Show from "./ShowCount";

function Counter(props) {
  const [count, setCount] = useState(0);
  function IncreaseCount() {
    if (count < 99) {
      setCount(count + 1);
    }
  }
  function DecreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className={props.classes}>
      <Button
        classes="btn"
        textContent="Increase"
        clickHandler={IncreaseCount}
      />
      <Show countText={count} />
      <Button
        classes="btn"
        textContent="Decrease"
        clickHandler={DecreaseCount}
      />
    </div>
  );
}
export default Counter;
