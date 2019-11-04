import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { setMenu } from "../../actions/menu";
import { connect } from "react-redux";

class MenuBar extends Component {
  static propTypes = {
    setMenu: PropTypes.func.isRequired
  };

  render() {
    const { setMenu, menu } = this.props;
    const menuLogo = !menu ? (
      <span className="icon-open" aria-label="Menu open">
        &#9776;
      </span>
    ) : (
      <span className="icon-closed" aria-label="Menu close">
        &times;
      </span>
    );
    const menuItem = (
      <a className="burger-menu" href="#" onClick={setMenu}>
        {menuLogo}
      </a>
    );
    return <div id="header-icon-container">{menuItem}</div>;
  }
}

export default connect(
  null,
  { setMenu }
)(MenuBar);
