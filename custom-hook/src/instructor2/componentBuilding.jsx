import { useState } from "react";
import Checkbox from "../component/Input/checkbox";

function ComponentBuilding() {
  let [data, setData] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: false },
  ]);
  let [rightData, setRightData] = useState([]);
  function changeHandler(id) {
    //console.log(id);
    let x = data.map((val) => {
      if (id === val.id) {
        return { ...val, checked: !val.checked };
      } else {
        return { ...val };
      }
    });
    setData(x);
    let y = rightData.map((val) => {
      if (id === val.id) {
        return { ...val, checked: !val.checked };
      } else {
        return { ...val };
      }
    });
    setRightData(y);
  }
  function rightClickHandler() {
    //console.log("right");
    let x = [];
    let y = [];
    for (let val of data) {
      if (val.checked) {
        x.push({ ...val, checked: !val.checked });
      } else {
        y.push({ ...val });
      }
    }
    setData(y);
    setRightData([...rightData, ...x]);
  }
  function leftClickHandler() {
    //console.log("hi");
    let x = [];
    let y = [];
    for (let val of rightData) {
      if (val.checked) {
        x.push({ ...val, checked: !val.checked });
      } else {
        y.push({ ...val });
      }
    }
    setData([...data, ...x]);
    setRightData([...y]);
    // console.log(x);
    // console.log(y);
  }
  return (
    <div style={{ display: "flex" }}>
      <div
        className="left"
        style={{
          height: "200px",
          width: "100px",
          backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.length > 0 &&
          data.map((val) => {
            return (
              <Checkbox
                key={val.id}
                id={val.id}
                onChange={() => {
                  changeHandler(val.id);
                }}
              />
            );
          })}
      </div>
      <button onClick={rightClickHandler}>{">"}</button>
      <button onClick={leftClickHandler}>{"<"}</button>
      <div
        className="right"
        style={{ height: "200px", width: "100px", backgroundColor: "red" }}
      >
        {rightData.length > 0 &&
          rightData.map((val) => {
            return (
              <Checkbox
                key={val.id}
                id={val.id}
                onChange={() => {
                  changeHandler(val.id);
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
export default ComponentBuilding;
