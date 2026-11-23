import { useState } from "react";

const StatesCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-demo">
      <button onClick={handleClick2}>-</button>
      <span className="counter-value">{count}</span>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default StatesCounter;
