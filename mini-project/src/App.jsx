import { useState, useEffect } from "react";

import "./App.css";
import KeyExample from "./component/dropdown/keyExample";
import DropdownExample from "../component/DropdownExample";
import Checkbox from "./checkbox/checkbox";
function App() {
  function handleCheck(e) {
    console.log(e.target.id);
    console.log(e.target.checked);
    console.log(e.target.value);

    let x = checkBoxData.map((val) => {
      if (val.id == e.target.id) {
        const obj = { ...val, isSelected: !val.isSelected };
        return obj;
      } else {
        return val;
      }
    });
    setCheckBoxData(x);
  }
  const [checkBoxData, setCheckBoxData] = useState([
    { id: "1", value: "English", isSelected: false },
    { id: "2", value: "Hindi", isSelected: false },
    { id: "3", value: "Marathi", isSelected: false },
  ]);
  return (
    <>
      <DropdownExample />
      {/*<KeyExample />*/}
      {checkBoxData.map((val) => (
        <Checkbox
          handleCheck={handleCheck}
          label={val.value}
          key={val.id}
          isSelected={val.isSelected}
          uniqueKey={val.id}
          value={val.value}
        />
      ))}
    </>
  );
}

export default App;
