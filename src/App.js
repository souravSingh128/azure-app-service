import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>hii Sourav</div>
      <h1>added new h1 tag here</h1>
      <p>this is some dummy paragraph</p>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
    </div>
  );
}

export default App;
