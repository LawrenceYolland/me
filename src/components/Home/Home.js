import React, { Component, Fragment } from "react";
import HomeCard from "./HomeCard";
import SocialBar from "./SocialBar";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <HomeCard />
        <SocialBar />
      </Fragment>
    );
  }
}
