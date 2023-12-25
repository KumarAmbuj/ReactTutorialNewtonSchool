import "./App";
function Button(props) {
  return (
    <button className={props.classes} onClick={props.clickHandler}>
      {props.textContent}
    </button>
  );
}
export default Button;
