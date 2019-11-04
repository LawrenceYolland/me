import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { setMenu } from "../../actions/menu";
import { connect } from "react-redux";

class MenuBar extends Component {
  static propTypes = {
    setMenu: PropTypes.func.isRequired,
    menu: PropTypes.bool.isRequired
  };

  render() {
    const { setMenu } = this.props;
    const menu = this.props.menu ? true : false;

    const menuItem = (
      <div className="burger-menu" onClick={setMenu}>
        {!menu ? (
          <span className="icon-open" aria-label="Menu open">
            &#9776;
          </span>
        ) : (
          <span className="icon-closed" aria-label="Menu close">
            &times;
          </span>
        )}
      </div>
    );
    return <div id="header-icon-container">{menuItem}</div>;
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu.menu
  };
};

export default connect(
  mapStateToProps,
  { setMenu }
)(MenuBar);
