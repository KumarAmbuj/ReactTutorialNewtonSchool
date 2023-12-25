import { useState } from "react";

const useCounter = (initial = 0) => {
  const [count, setCounter] = useState(initial);

  function handleCounter(count) {
    setCounter(count);
  }
  return [count, handleCounter];
};

export default useCounter;
