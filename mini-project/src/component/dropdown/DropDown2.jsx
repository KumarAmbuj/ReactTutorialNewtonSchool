const DropDown = (props) => {
  const { options, handleChange, idKey, labelKey } = props;
  // Options is the array of object
  // options
  // handleChange

  return (
    <select onChange={handleChange}>
      {Array.isArray(options) &&
        options?.map((option, index) => {
          return (
            <option key={option[idKey]} value={option[idKey]}>
              {option[labelKey]}
            </option>
          );
        })}
    </select>
  );
};

export default DropDown;
