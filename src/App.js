import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css";
import "./assets/styles/Header.css";
import "./assets/styles/Footer.css";
import "./assets/styles/Research.css";

// import DayNight from "./components/DayNight";
// import SocialBar from "./components/SocialBar";

import Home from "./components/Views/Home";
import Research from "./components/Views/Research";
import MenuBar from "./components/Header/MenuBar";
import Menu from "./components/Header/Menu";

import PropTypes from "prop-types";

class App extends Component {
  static propTypes = {
    mode: PropTypes.bool.isRequired,
    menu: PropTypes.bool.isRequired
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const screenMode = this.props.mode ? "dark" : "light";
    const menu = this.props.menu ? true : false;

    return (
      <div className={"app" + " " + screenMode}>
        <header>
          <Fragment>
            <MenuBar />
            {!menu ? null : <Menu />}
          </Fragment>
        </header>
          {/* <DayNight /> */}
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
    mode: state.mode.mode,
    menu: state.menu.menu
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(App));
