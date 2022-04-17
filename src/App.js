import "./App.css";
import FlatList from "./components/flat_list";
// import GoogleMapReact from "google-map-react";
import { useRef, useEffect, useState } from "react";

import React, { Component } from "react";
import flats from "./data/flats";
import Marker from "./components/marker";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoibmFpcmRlc2lnbnMiLCJhIjoiY2t6N3oxZGtyMWY5ejJ2cGhtc283bWtoYiJ9.2Xm0lvF_0guXITdMgqokVg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats,
      lng: -70.9,
      lat: 42.35,
      zoom: 9,
    };
    this.mapContainer = React.createRef();
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng,
    };
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.selectedFlat.lng, this.state.selectedFlat.lat],
      zoom: zoom,
    });
  }
  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
    console.log(flats[index]);
  };
  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />

        <div ref={this.mapContainer} className="map-container">
          {" "}
          <div className="sidebar">
            Longitude: {this.state.selectedFlat.lng} | Latitude:{" "}
            {this.state.selectedFlat.lat} | Zoom: {this.state.zoom}
          </div>
          E
        </div>
      </div>
    );
  }
}
