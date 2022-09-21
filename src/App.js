import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>
        Counter is <b>{counter}</b>
      </h1>
      <button
        className="increment_count"
        onClick={(e) => setCounter((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="decrement_count"
        onClick={(e) => setCounter((prev) => prev - 1)}
      >
        Reduce
      </button>
    </div>
  );
}

export default App;
