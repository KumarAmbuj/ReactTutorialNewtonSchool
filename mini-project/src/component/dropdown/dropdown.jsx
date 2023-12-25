const Dropdown = (props) => {
  const { options, handleChange } = props;
  // Options is the array of object
  // options
  // handleChange

  return (
    <select onChange={handleChange}>
      <option>Select...</option>
      {options.map((option) => {
        return <option value={option.id}>{option.firstName}</option>;
      })}
    </select>
  );
};

export default Dropdown;
