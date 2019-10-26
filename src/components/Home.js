import React, { Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-image-container">
          <img src={require("../assets/headshot.jpg")} />
        </div>
        <h1>Dr Lawrence Yolland</h1>
      </div>
    );
  }
}
