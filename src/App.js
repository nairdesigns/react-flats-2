import logo from "./logo.svg";
import "./App.css";
import FlatList from "./components/flat_list";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <FlatList />
      </div>
    );
  }
}

// function App() {

//   return (
//     <div className="App">
//       <FlatList />
//     </div>
//   );
// }

// export default App;
