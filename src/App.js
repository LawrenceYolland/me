import React, { Component, Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import SocialBar from "./components/SocialBar";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <SocialBar />
      </Fragment>
    );
  }
}

export default App;
