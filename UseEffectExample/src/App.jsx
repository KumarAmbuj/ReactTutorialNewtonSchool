import { useState } from "react";

import "./App.css";
import UseEffectExample from "./UseEffectExample";
import UseEffectExample2 from "./UseEffectExample2";
import UseEffectExample3 from "./UseEffectExample3";
function App() {
  // defining internal variable or state of component
  // management of component label data
  // for managing data inside the component react gives useState
  var heading1 = 123;
  // state
  let [heading, setHeading] = useState("This is the react");
  const [description, setDescription] = useState("React is very powerful");
  const [theme, setTheme] = useState("light");
  const [globalTheme, setGlobalTheme] = useState("");

  const [toggle, setToggle] = useState(true);

  const changeHeading = () => {
    setHeading(`This is the new Heading ${Math.random() * 100}`);
    setDescription(`React Version ${Math.random() * 100}`);

    <div>
      <UseEffectExample />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <UseEffectExample />}
    </div>;
  };
}

export default App;
