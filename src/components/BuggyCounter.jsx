import { useState } from 'react';

const BuggyCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  if (count === 5) {
    // Throw an error when the counter reaches 5
    throw new Error("Counter reached 5. This is a bug!");
  }
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default BuggyCounter;
