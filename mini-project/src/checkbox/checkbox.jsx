import React from "react";

function Checkbox(props) {
  const { label, handleCheck, uniqueKey, isSelected,value } = props;
  return (
    <div>
      <label>{label}</label>
      <input
        type="checkbox"
        onChange={handleCheck}
        id={uniqueKey}
        checked={isSelected}
        value={value}
      />
    </div>
  );
}

export default Checkbox;
