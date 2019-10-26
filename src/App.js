import React, { Component, Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import DayNight from "./components/DayNight";

export default class App extends Component {
  dayNight = e => {
    console.log("day night ☀️ 🌑");
  };

  render() {
    return (
      <Fragment>
        <DayNight dayNight={this.dayNight} />
        <Home />
      </Fragment>
    );
  }
}
