import { useEffect, useState } from "react";

function Component() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    //localStorage.removeItem("userInst");
    if (localStorage.getItem("userInst") == null) {
      localStorage.setItem("userInst", JSON.stringify([]));
    } else {
      let x = localStorage.getItem("userInst");
      setData([...x]);
    }
  }, []);
  async function getAge() {
    let x = await fetch(`https://api.agify.io/?name=${name}`);
    x = await x.json();
    if (x.age) {
      setAge(x.age);
      //console.log(age);
      setData([...data, x]);
    } else {
      setFlag(true);
    }
  }
  function clickHandler() {
    let x = data.filter((val) => {
      return val.name === name;
    });
    if (x.length > 0) {
      setAge(x[0].age);
    } else {
      getAge();
    }
  }
  useEffect(() => {
    localStorage.setItem("userInst", JSON.stringify(data));
    setFlag(false);
  }, [data]);
  function handleInnerClick() {
    setData([...data, { name: name, age: age }]);
    setFlag(false);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      {age ? <div>{age}</div> : ""}
      <button onClick={clickHandler}>Get Age</button>
      {flag ? (
        <div>
          <input type="text" value={name}></input>
          <input
            type="number"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
          <button onClick={handleInnerClick}>set Age</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Component;
