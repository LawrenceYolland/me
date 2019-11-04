import React, { Component, Fragment } from "react";
import Hemocyte from "../Research/Hemocyte";
import Read from "../Research/Read";

export default class Research extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Hemocyte />
        <Read />
      </Fragment>
    );
  }
}
