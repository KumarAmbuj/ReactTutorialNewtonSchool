import { useState } from "react";
import "./styles.css";

function Theme() {
  const [color, setColor] = useState(0);
  const bgarr = ["white", "red", "blue", "black", "pink", "yellow", "green"];
  const carr = ["black", "white", "yello", "blue", "white", "black", "pink"];
  function changeHandler(e) {
    setColor(e.target.value);
    console.log(color);
  }
  return (
    <>
      <div className="container" style={{ backgroundColor: bgarr[color] }}>
        <div className="dropdown">
          <select onChange={changeHandler}>
            <option value="0">Select color</option>
            <option value="1">Red</option>
            <option value="2">Blue</option>
            <option value="3">Pink</option>
            <option value="4">Yellow</option>
            <option value="5">Green</option>
          </select>
        </div>
        <div className="paragraph" style={{ color: carr[color] }}>
          Hey I am doing great
        </div>
      </div>
    </>
  );
}
export default Theme;
