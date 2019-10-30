import React from "react";
import "../../assets/styles/Home/SocialBar.css";
import { connect } from "react-redux";

const SocialBar = ({ mode }) => {
  const screeMode = mode ? "Dark" : "Light";

  return (
    <div className="social-content-container">
      <div className="social-bar">
        <div className="social-icon-container">
          <div className="social-icon">
            <a
              href="https://twitter.com/lawrenceyolland"
              class={"fa fa-twitter fa-2x" + " " + screeMode}
              title="follow me on Twitter"
            ></a>
          </div>
          <div className="social-icon">
            <a
              href="https://github.com/lawrenceyolland"
              class={"fa fa-github fa-2x" + " " + screeMode}
              title="check out my Github"
            ></a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/lawrenceyolland/"
              class={"fa fa-linkedin fa-2x" + " " + screeMode}
              title="add me on LinkedIn"
            ></a>
          </div>
          <div className="social-icon">
            <a
              href="mailto:lawrence@sciencedisrupt.com"
              class={"fa fa-envelope fa-2x" + " " + screeMode}
              title="send me an email"
            ></a>
          </div>
        </div>
      </div>
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
)(SocialBar);
