import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import NewButton from "./NewButton";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  const [data, Setdata] = useState([]);
  let d = useRef(0);
  async function handleClick() {
    let API = "https://dummyjson.com/users";
    let data = await fetch(API);
    data = await data.json();
    Setdata(data.users);
  }
  const [counter, setCounter] = useState(-20);
  d.current = d.current + 1;
  console.log(d.current);
  useEffect(() => {
    let id = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
    if (counter === 20) {
      clearTimeout(id);
    }
  }, [counter]);

  return (
    <>
      {/*<Counter classes="container" />
      <NewButton textButton="Button with props" />
      <NewButton>Button with Children Prperty 1</NewButton>
      <NewButton>Button with Children Prperty 2</NewButton>
  <NewButton></NewButton>*/}
      {/*<button className="btn" onClick={handleClick}>
        Get User
      </button>
      {data.length > 0 &&
        data.map((val) => {
          return <Card user={val} />;
        })}*/}
      <div>
        <h1>Timer:: {counter}</h1>
      </div>
    </>
  );
}

export default App;
