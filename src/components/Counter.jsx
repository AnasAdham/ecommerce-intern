import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <p>This is the counter component</p>
      <p>The counter is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Increment</button>
    </React.Fragment>
  );
};

export default Counter;
