import reactLogo from "./assets/react.svg";
import sanjoyRoy from "./assets/sanjoy-roy-300x300.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://github.com/sanjoy-git" target="_blank">
          <img src={sanjoyRoy} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sanjoy Roy</h1>
      <div className="card">
        <p>React Developer</p>
      </div>
      <p className="read-the-docs">
        <a
          href="https://github.com/sanjoy-git"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github
        </a>{" "}
        |
        <a
          href="https://obsius.site/1g5n4h0n2e19202o6d3h"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Projects
        </a>
      </p>
    </>
  );
}

export default App;
