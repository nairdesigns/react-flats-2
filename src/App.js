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
  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  };
  render() {
    return (
      <div>
        App
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
      </div>
    );
  }
}
