import { useState } from "react";

import "./App.css";
import useToggle from "./useToggle";
import useCounter from "./useCounter";
import UseReducer from "./useReducer";
import UseReducer2 from "./useReducer2";
import ComponentBuilding from "./instructor2/componentBuilding";
import Component from "./instructor2/componentBuilding2";
import OnBlur from "./OnBlur";
function App() {
  const [toggle, setToggle] = useToggle(false);
  const [count, setCount] = useCounter(0);

  return (
    <>
      {/* <button
        onClick={(e) => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "hide" : "show"}
      </button>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button> */}

      {/* <UseReducer /> */}
      <br></br>

      {/* <UseReducer2 /> */}
      {/* <ComponentBuilding /> */}
      {/* <Component /> */}

      <OnBlur />
    </>
  );
}

export default App;
