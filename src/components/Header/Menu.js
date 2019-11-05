import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setMenu } from "../../actions/menu";
import MenuSocialBar from "./MenuSocialBar";
import { Link } from "react-router-dom";
class Menu extends Component {
  static propTypes = {
    setMenu: PropTypes.func.isRequired
  };

  render() {
    const { setMenu } = this.props;
    return (
      <Fragment>
        <div className="drop-menu">
          <div id="menu">
            <Link to="/" className="menu-item" onClick={setMenu}>
              Home
            </Link>
            <Link to="/research" className="menu-item" onClick={setMenu}>
              Research
            </Link>
            <a className="menu-item" href="#" onClick={setMenu}>
              Resume
            </a>
          </div>
          <MenuSocialBar />
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { setMenu }
)(withRouter(Menu));
