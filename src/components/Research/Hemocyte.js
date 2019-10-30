import React from "react";
import "../../assets/styles/Research/Research.css"

const Hemocyte = () => {
  return (
    <div className="hemocyte-image-container">
      <img src={require("../../assets/images/hemocytes.gif")} className="hemocyte-image" alt="cells" />

    </div>
  );
};

export default Hemocyte;
