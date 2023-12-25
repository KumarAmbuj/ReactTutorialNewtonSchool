function NewButton(props) {
  return <button>{props.textButton || props.children}</button>;
}
export default NewButton;
