import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Guvi React App from GitHub - B24WE</p>
        <a
          className="App-link"
          href="https://www.guvi.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from Guvi
        </a>
      </header>
    </div>
  );
}

export default App;
