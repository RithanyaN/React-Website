import { useState } from "react";
import "./Counter.css"; // Assuming Counter.css is the correct path

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="Container">
        <div className="counter-box">
         <center><h1>Counter: {count}</h1></center>
          <div className="button-container">
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Router() {
  return <CounterComponent />;
}
