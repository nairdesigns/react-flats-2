import logo from "./logo.svg";
import "./App.css";
import FlatList from "./components/flat_list";
import React, { Component } from "react";
import flats from "./data/flats";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats,
    };
  }

  render() {
    return (
      <div>
        App
        <FlatList />
      </div>
    );
  }
}
