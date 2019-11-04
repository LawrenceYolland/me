import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setMenu } from "../../actions/menu";

import MenuSocialBar from "./MenuSocialBar";

class Menu extends Component {
  static propTypes = {
    setMenu: PropTypes.func.isRequired
  };
  render() {
    const { setMenu } = this.props;
    return (
      <Fragment>
        <div className="drop-menu-overlay"></div>
        <div className="drop-menu">
          <div id="menu">
            <a className="menu-item" href="#" onClick={setMenu}>
              Home
              <span className="right-moji big-moji">👩‍🔬</span>
            </a>
            <a className="menu-item" href="#" onClick={setMenu}>
              Research
              <span className="left-moji">👋</span>
            </a>

            <a className="menu-item" href="#" onClick={setMenu}>
              Resume
              <span className="right-moji big-moji">👩‍🔬</span>
            </a>

            <div className="social-block">
              <MenuSocialBar />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { setMenu }
)(withRouter(Menu));
