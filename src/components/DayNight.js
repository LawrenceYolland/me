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
    return (
      <div className="modeswitch-container">
        <label class="daynight-switch">
          <input type="checkbox" onClick={setMode} />
          <span class="daynight-slider round"></span>
        </label>
      </div>
    );
  }
}

export default connect(
  null,
  { setMode }
)(DayNight);
