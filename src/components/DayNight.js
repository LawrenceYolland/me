import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { setMode } from "../actions/mode";

class DayNight extends Component {
  static propTypes = {
    setMode: PropTypes.func.isRequired
  };

  render() {
    return <input type="checkbox" onClick={this.props.setMode} />;
  }
}

export default connect(
  null,
  { setMode }
)(DayNight);
