import { useState } from "react";
// hook

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter((counter) => counter + 1);
  };

  const stopHandler = () => {
    setCounter("-");
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={stopHandler}>stop</button>
    </div>
  );
}

export default Counter;
