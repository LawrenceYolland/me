import React from "react";
import "../assets/styles/Home.css";

const HomeCard = () => {
  return (
    <div className="home-container">
      <div className="home-image-container">
        <img src={require("../assets/images/headshot.jpg")} />
      </div>
      <h1>Dr Lawrence Yolland</h1>
    </div>
  );
};

export default HomeCard;
