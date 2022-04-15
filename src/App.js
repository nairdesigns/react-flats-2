import logo from "./logo.svg";
import "./App.css";
import React from "react";
import FlatList from "./components/flat_list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. yoyo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <FlatList />
        </a>
      </header>
    </div>
  );
}

export default App;
