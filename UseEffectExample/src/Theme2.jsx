import { useState } from "react";

function Theme2() {
  const arr = ["white", "red", "blue", "pink", "yellow", "green"];
  const [innerColor, setInnercolor] = useState(0);
  const [outerColor, setOutercolor] = useState(0);
  function parentHandler(e) {
    setInnercolor(e.target.value);
    setOutercolor(e.target.value);
  }
  function childHandler(e) {
    setInnercolor(e.target.value);
  }
  return (
    <div className="parent" style={{ backgroundColor: arr[outerColor] }}>
      <div className="parentDropdown">
        <select onChange={parentHandler}>
          <option value="0">Select color</option>
          <option value="1">Red</option>
          <option value="2">Blue</option>
          <option value="3">Pink</option>
          <option value="4">Yellow</option>
          <option value="5">Green</option>
        </select>
      </div>
      <div className="child" style={{ backgroundColor: arr[innerColor] }}>
        <div className="childDropdown">
          <select onChange={childHandler}>
            <option value="0">Select color</option>
            <option value="1">Red</option>
            <option value="2">Blue</option>
            <option value="3">Pink</option>
            <option value="4">Yellow</option>
            <option value="5">Green</option>
          </select>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quod
            asperiores sequi. Accusantium consectetur eius qui voluptatem est,
            eligendi cum, exercitationem corporis vero nulla dolor! Repudiandae,
            itaque! Asperiores, error amet.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Theme2;
