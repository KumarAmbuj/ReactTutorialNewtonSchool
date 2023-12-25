import { useState } from "react";

const useToggle = (initial = false) => {
  const [isVisible, setIsVisible] = useState(initial);

  function handleVisible() {
    setIsVisible(!isVisible);
  }
  return [isVisible, handleVisible];
};

export default useToggle;
