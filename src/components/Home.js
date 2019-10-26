import React, { Component } from "react";
import "../assets/styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-image-container">
          <img src={require("../assets/images/headshot.jpg")} />
        </div>
        <h1>Dr Lawrence Yolland</h1>
      </div>
    );
  }
}
