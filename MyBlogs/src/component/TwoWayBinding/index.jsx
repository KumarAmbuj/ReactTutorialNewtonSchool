const { useState } = require("react");

function Parent() {
  const [description, setDescription] = useState("");
  return (
    <div>
      <h1>Parent</h1>
      <Input />
    </div>
  );
}
export default Parent;

function Child(props) {}
