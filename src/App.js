import "./styles.css";

import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className="App">
      <button onClick={toggleShow}> {show ? "Hide" : "Show"}</button>
      {show ? <h1>Hello CodeSandbox</h1> : ""}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
