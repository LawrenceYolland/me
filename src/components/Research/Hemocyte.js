import React from "react";
import "../../assets/styles/Research/Research.css";
import ScrollPrompt from "./ScrollPrompt";

const Hemocyte = () => {
  return (
    <div className="home-splash">
      <div className="home-splash-image"></div>
      <div className="home-splash-overlay">
        <div className="hpc-block-container">
          <h2 className="hpc-h1">
            <span className="hpc-span">Research</span>
          </h2>
          <h4 className="hpc-h4">
            <span className="hpc-span">
              How do cells move? 🔬🦠
            </span>
          </h4>
        </div>
      </div>
      <ScrollPrompt />
      <span id="content-top"></span>
    </div>

  );
};

export default Hemocyte;
