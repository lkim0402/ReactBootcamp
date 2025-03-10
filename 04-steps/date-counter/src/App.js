import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function handleStep(num) {
    setStep((step) => step + num);
  }

  function handleCount(num) {
    setCount((count) => count + num * step);
  }

  // function handleDate(days) {
  //   const date = new Date(2027, 6, 21);
  //   date.setDate(date.getDate() + days);
  //   return date.toDateString();
  // }
  const date = new Date(2027, 6, 21);
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="buttons">
        <div>
          <button onClick={() => handleStep(-1)}>-</button>Step: {step}
          <button onClick={() => handleStep(1)}>+</button>
        </div>
        <div>
          <button onClick={() => handleCount(-1)}>-</button>Count: {count}
          <button onClick={() => handleCount(1)}>+</button>
        </div>
      </div>
      <p>
        {/* Today is Mon Jun 21 2027 */}
        {/* {Math.abs(count)} days {count < 0 ? "ago" : ""} from today is{" "} */}
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} day${count === 1 ? "" : "s"} from today is `
          : `${Math.abs(count)} day${count === -1 ? "" : "s"} ago was `}
        {/* {date} */}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
