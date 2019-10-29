import React, { Component } from "react";
import "../../assets/styles/HomeCard.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HomeCard = ({ mode }) => {
  const screenMode = mode ? "Dark" : "Light";
  return (
    <div className="home-container">
      <div className="home-image-container">
        <img src={require("../../assets/images/headshot.jpg")} alt="headshot" />
      </div>
      <h1>Dr Lawrence Yolland</h1>
      <p>
        Hellooooo - I'm Lawrence, a former computational biologist turned
        full-stack developer
      </p>
      <p>
        You can check out my research
        <Link to="/research" className={"text-link" + " " + screenMode}>
          here
        </Link>
        and some of the things I've things built
        <Link to="/" className={"text-link" + " " + screenMode}>
          here
        </Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.mode.mode
  };
};

export default connect(
  mapStateToProps,
  null
)(HomeCard);
