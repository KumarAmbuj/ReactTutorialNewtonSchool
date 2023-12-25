import { useEffect, useState, useRef } from "react";

function OnBlur() {
  const [data, setData] = useState();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  return (
    <div>
      <input type="text" ref={ref1}></input>
      <button
        onClick={() => {
          ref1.current.value = "Ambuj";
        }}
      >
        A
      </button>
      <input type="text" ref={ref2}></input>
      <button
        onClick={() => {
          ref2.current.value = "Ambuj";
        }}
      >
        B
      </button>
      <input type="text" ref={ref3}></input>
      <button
        onClick={() => {
          ref3.current.value = "Ambuj";
        }}
      >
        C
      </button>
      <input type="text" ref={ref4}></input>
      <button
        onClick={() => {
          ref4.current.value = "Ambuj";
        }}
      >
        D
      </button>
      <input type="text" ref={ref5}></input>
      <button
        onClick={() => {
          ref5.current.value = "Ambuj";
        }}
      >
        E
      </button>
      <button
        onMouseOver={() => {
          console.log("heyyy");
        }}
        onMouseLeave={() => {
          console.log("out");
        }}
      >
        HHH
      </button>
    </div>
  );
}
export default OnBlur;
