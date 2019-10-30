import React, { Component, Fragment } from "react";
import HomeCard from "./HomeCard";
import SocialBar from "./SocialBar";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <HomeCard />
        <SocialBar />
      </Fragment>
    );
  }
}
