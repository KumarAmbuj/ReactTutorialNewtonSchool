function Checkbox(props) {
  let { id, onChange } = props;
  return (
    <div>
      <label>{id}</label>
      <input type="checkbox" id={id} onChange={onChange} key={id}></input>
    </div>
  );
}
export default Checkbox;
