import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Research from "./components/Research/Research";

import DayNight from "./components/DayNight";

class App extends Component {
  render() {
    const screenMode = this.props.mode ? "Dark" : "Light";
    return (
      <div className={"App" + " " + screenMode}>
        <DayNight />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/research" render={() => <Research />} />
        </Switch>
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
