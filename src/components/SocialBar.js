import React, { Component } from "react";
import "../assets/styles/SocialBar.css";
import { connect } from "react-redux";

class SocialBar extends Component {
  render() {
    const classMode = this.props.mode ? "dark" : "light";

    return (
      <div className="social-content-container">
        <div className="social-bar">
          <div className="social-icon-container">
            <div className="social-icon">
              <a
                href="https://twitter.com/lawrenceyolland"
                class={"fa fa-twitter fa-2x" + " " + classMode}
                title="follow me on Twitter"
              ></a>
            </div>
            <div className="social-icon">
              <a
                href="https://github.com/lawrenceyolland"
                class={"fa fa-github fa-2x" + " " + classMode}
                title="check out my Github"
              ></a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/lawrenceyolland/"
                class={"fa fa-linkedin fa-2x" + " " + classMode}
                title="add me on LinkedIn"
              ></a>
            </div>
            <div className="social-icon">
              <a
                href="mailto:lawrence@sciencedisrupt.com"
                class={"fa fa-envelope fa-2x" + " " + classMode}
                title="send me an email"
              ></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    mode: state.mode.mode
  };
};

export default connect(
  mapStateToProps,
  null
)(SocialBar);

// export default SocialBar;
