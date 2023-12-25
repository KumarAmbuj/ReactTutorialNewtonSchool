import { useEffect, useState } from "react";
const UseEffectExample = () => {
  const [heading, setHeading] = useState("Intitial value of state");
  const [description, setDescription] = useState(
    "This phase are called mouting"
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log("useEffect EVERY-RE-RENDER");
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
      <p>{count}</p>
    </div>
  );
};
export default UseEffectExample;
