import logo from "./logo.svg";
import "./App.css";
import React from "react";
import FlatList from "./components/flat_list";

function App() {
  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  };
  return (
    <div className="App">
      <FlatList />
    </div>
  );
}

export default App;
