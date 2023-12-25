import { useState } from "react";

import "./App.css";
import Login from "./screen/logincontaner";
import Parent from "./component/TwoWayBinding";
function App() {
  return (
    <>
      {/* <h1>Form </h1>
      <div className="mt-10">
        <Login />
      </div> */}
      <Parent />
    </>
  );
}

export default App;
