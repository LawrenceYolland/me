import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Views/Home";
import Research from "./components/Views/Research";
import "./assets/styles/Header.css";
import "./assets/styles/Footer.css";

import DayNight from "./components/DayNight";
import SocialBar from "./components/SocialBar";
import MenuBar from "./components/Header/MenuBar";
import Menu from "./components/Header/Menu";

class App extends Component {
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
            {!menu ? null : (
              <Menu/>
            )}
          </Fragment>
        </header>
        <main>
          {/* <DayNight /> */}
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/research" render={() => <Research />} />
          </Switch>
        </main>
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
