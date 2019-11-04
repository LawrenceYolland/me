import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { setMode } from "../actions/mode";
import "../assets/styles/DayNight.css";

class DayNight extends Component {
  static propTypes = {
    setMode: PropTypes.func.isRequired
  };

  render() {
    const { setMode } = this.props;
    return <input type="checkbox" onClick={setMode} />;
  }
}

export default connect(
  null,
  { setMode }
)(DayNight);
