import { useState } from "react";

import "./binding.css";

function Parent() {
  const [description, setDescription] = useState("");
  const [descriptionFromChild, setDescriptionFromChild] = useState("");
  function changeHandler(e) {
    setDescription(e.target.value);
  }
  function fromChild(value) {
    setDescriptionFromChild(value);
  }
  return (
    <div className="parent">
      <h1 style={{ textAlign: "center" }}>Parent</h1>
      <h2>descrtiption from child: {descriptionFromChild}</h2>
      <input type="text" value={description} onChange={changeHandler} />
      <Child description={description} fromChild={fromChild} />
    </div>
  );
}
export default Parent;

function Child(props) {
  const { description, fromChild } = props;
  function changeHandler(e) {
    fromChild(e.target.value);
  }
  return (
    <div className="child">
      <h1 style={{ textAlign: "center" }}>Child</h1>
      <h2>Description from Parent: {description}</h2>
      <input type="text" onChange={changeHandler} />
    </div>
  );
}
