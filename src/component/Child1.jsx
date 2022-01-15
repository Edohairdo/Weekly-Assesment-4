import React, { useEffect, useState } from "react";
import Child2 from "./Child2";

const Child1 = () => {
  let [count, setCount] = useState(0);
  let [updatingCount, setUpdatingCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setUpdatingCount((prevState) => prevState + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setUpdatingCount((prevState) => prevState + 1);
    }
  };

  const handleReset = () => {
    setCount((count = 0));
  };

  // Window alert
  useEffect(() => {
    if (updatingCount === 5) {
      alert("You update 5times");
      setUpdatingCount((updatingCount = 0));
    }
  }, [updatingCount]);

  let oddEven = count % 2 === 0 ? "EVEN" : "ODD";

  return (
    <>
      <h3>Counter</h3>
      <div>Value is {oddEven}</div>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>ADD</button>
      <button onClick={handleDecrement}>MIN</button>
      <button onClick={handleReset}>RESET</button>
      <Child2 counting={count} />
    </>
  );
};

export default Child1;
