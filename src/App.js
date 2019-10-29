import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Home from "./components/Home";
import DayNight from "./components/DayNight";

class App extends Component {
  render() {
    const screenMode = this.props.mode ? "Dark" : "Light";
    return (
      <div className={"App" + " " + screenMode}>
        <DayNight />
        <Home />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mode: state.mode.mode
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
